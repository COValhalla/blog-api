const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, required: true, max: 200 },
  username_lower: { type: String, required: true, max: 200 },
  password: { type: String, required: true, max: 200 },
  status: { type: String, enum: ['visitor', 'admin'], required: true },
});

module.exports = mongoose.model('Users', UserSchema);
