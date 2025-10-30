const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  role: {
    type: String,
    enum: ['Admin', 'Moderator', 'User'],
    default: 'User'
  }
});

module.exports = mongoose.model('User', userSchema);
