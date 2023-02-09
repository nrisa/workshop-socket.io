const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chatPost = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  message: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('chat', chatPost);