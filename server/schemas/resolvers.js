const { User, Message } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');


const notLoggedIn = () => {
  throw new AuthenticationError('You need to be logged in!');
};

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
          .populate('messages')
          .populate('friends');

        return userData;
      }

      throw new AuthenticationError('Not logged in');
    },
    // get all users
    users: async () => {
      return User.find()
        .select('-__v -password')
        .populate('friends')
        .populate('messages');
    },
    // get a user by username
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select('-__v -password')
        .populate('friends')
        .populate('messages');
    },
    messages: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Message.find(params).sort({ createdAt: -1 });
    },
    // Get my messages
    inbox: async (parent, { receiver }) => {
      const params = receiver ? { receiver } : {};
      return Message.find(params);
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      return { token, user };
    },
    addMessage: async (parent, args, context) => {
      if (!context.user) return notLoggedIn();

      const message = await Message.create({
        ...args,
        username: context.user.username,
      });

      await User.findByIdAndUpdate(
        { _id: context.user._id },
        { $push: { messages: message._id } },
        { new: true }
      );

      return message;
    },
    updateMessage: async (parent, { _id, mycss, myhtml }, context) => {
      try {
        if (!context.user) return notLoggedIn();
        const updateObject = {};
        if (mycss !== undefined) updateObject.mycss = mycss;
        if (myhtml !== undefined) updateObject.myhtml = myhtml;

        return Message.findByIdAndUpdate({ _id }, updateObject, { new: true });
      } catch (error) {
        console.error(error);
        return Promise.reject(error);
      }
    },
    deleteMessage: async (parent, { _id }, context) => {
      if (!context.user) return notLoggedIn();

      try {
        const message = await Message.findOne({ _id });
        const user = await User.updateOne(
          { username: message.username },
          { $pull: { messages: { _id } } },
          { new: true }
        );
        await message.remove();

        return user;
      } catch (error) {
        console.log(error);
        return Promise.reject(error);
      }
    },
    addFriend: async (parent, { friendId }, context) => {
      // This mutation will look for an incoming friendId and add that to the current user's friends array
      // A user can't be friends with the same person twice, though, hence why we're using the $addToSet operator instead of $push to prevent duplicate entries

      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { friends: friendId } },
          { new: true }
        ).populate('friends');

        return updatedUser;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;
