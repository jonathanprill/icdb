// Type definitions, or TypeDefs for short, involves literally defining every piece of data that the client can expect to work with through a query or mutation.

// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    city: String
    friendCount: Int
    messages: [Message]
    friends: [User]
  }

  type Message {
    _id: ID
    messageText: String
    sender: String
    receiver: String
  }

  type Query {
    me: User
    users: [User]
    user(username: String): User
    messages: [Message]
    inbox(receiver: String): [Message]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String, email: String!, password: String!): Auth
    addMessage(messageText: String!, sender: String!, receiver: String!): Message
    updateMessage(_id: ID!, messageText: String, sender: String, receiver: String): Message
    deleteMessage(_id: ID!): Message
    addFriend(friendId: ID!): User
  }

  type Auth {
    token: ID!
    user: User
    friends: [User]
  }
`;

// export the typeDefs
module.exports = typeDefs;
