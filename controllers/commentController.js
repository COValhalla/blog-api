const Comments = require('../models/Comments');

// Display list of all Comments.
exports.comment_list = function (req, res) {
  res.json({ message: 'NOT IMPLEMENTED: Comment list' });
};

// Display detail page for a specific Comment.
exports.comment_detail = function (req, res) {
  res.json({ message: 'NOT IMPLEMENTED: Comment detail: ' + req.params.id });
};

// Display Comment create form on GET.
exports.comment_create_get = function (req, res) {
  res.json({ message: 'NOT IMPLEMENTED: Comment create GET' });
};

// Handle Comment create on POST.
exports.comment_create_post = function (req, res) {
  res.json({ message: 'NOT IMPLEMENTED: Comment create POST' });
};

// Display Comment delete form on GET.
exports.comment_delete_get = function (req, res) {
  res.json({ message: 'NOT IMPLEMENTED: Comment delete GET' });
};

// Handle Comment delete on POST.
exports.comment_delete_post = function (req, res) {
  res.json({ message: 'NOT IMPLEMENTED: Comment delete POST' });
};

// Display Comment update form on GET.
exports.comment_update_get = function (req, res) {
  res.json({ message: 'NOT IMPLEMENTED: Comment update GET' });
};

// Handle Comment update on POST.
exports.comment_update_post = function (req, res) {
  res.json({ message: 'NOT IMPLEMENTED: Comment update POST' });
};
