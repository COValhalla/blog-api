const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var options = {
  weekday: 'short',
  year: 'numeric',
  month: '2-digit',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
};

const BlogSchema = new Schema({
  Date: {
    type: String,
    default: new Date().toLocaleDateString('en-us', options),
  },
  title: { type: String, required: true, max: 100 },
  content: { type: String, required: true },
  status: { type: String, enum: ['unpublished', 'published'], required: true },
  user: { type: Schema.Types.ObjectId, ref: 'Users', required: true },
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comments' }],
  likes: { type: Number, default: 0 },
});

module.exports = mongoose.model('Blogs', BlogSchema);
