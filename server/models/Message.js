const { Schema, model } = require('mongoose');

const messageSchema = new Schema(
  {
    messageText: {
      type: String,
      required: 'You need to have message text!',
    },
    sender: {
      type: String,
      required: 'You need to have CSS!',
    },
    receiver: {
      type: String,
      required: true
    },
  
  },
  {
    toJSON: {
        virtuals: true
    }
  }
);


const Message = model('Message', messageSchema);

module.exports = Message;
