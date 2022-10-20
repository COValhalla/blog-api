const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'Users', required: true },
  blog: { type: Schema.Types.ObjectId, ref: 'Blogs', required: true },
  content: { type: String, required: true },
  likes: { type: Number, default: 0 },
});

module.exports = mongoose.model('Comments', CommentSchema);
