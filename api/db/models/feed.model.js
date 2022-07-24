const mongoose = require('mongoose');

const FeedSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  formDate: {
    type: Date,
    required: true,
    default: Date.now
  }
});

const Feed = mongoose.model('Feed', FeedSchema);

module.exports = { Feed }
