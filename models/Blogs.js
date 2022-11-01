const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BlogSchema = new Schema({
  Date: { type: Date, default: Date.now.toLocaleString('en-us') },
  title: { type: String, required: true, max: 100 },
  content: { type: String, required: true },
  status: { type: String, enum: ['unpublished', 'published'], required: true },
  user: { type: Schema.Types.ObjectId, ref: 'Users', required: true },
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comments' }],
  likes: { type: Number, default: 0 },
});

module.exports = mongoose.model('Blogs', BlogSchema);
