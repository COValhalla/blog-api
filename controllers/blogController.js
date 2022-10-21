const Blogs = require('../models/Blogs');

// Display list of all Blogs.
exports.blog_list = function (req, res) {
  res.json({ message: 'NOT IMPLEMENTED: Blog list' });
};

// Display detail page for a specific Blog.
exports.blog_detail = function (req, res) {
  res.json({ message: 'NOT IMPLEMENTED: Blog detail: ' + req.params.id });
};

// Display Blog create form on GET.
exports.blog_create_get = function (req, res) {
  res.json({ message: 'NOT IMPLEMENTED: Blog create GET' });
};

// Handle Blog create on POST.
exports.blog_create_post = function (req, res) {
  res.json({ message: 'NOT IMPLEMENTED: Blog create POST' });
};

// Display Blog delete form on GET.
exports.blog_delete_get = function (req, res) {
  res.json({ message: 'NOT IMPLEMENTED: Blog delete GET' });
};

// Handle Blog delete on POST.
exports.blog_delete_post = function (req, res) {
  res.json({ message: 'NOT IMPLEMENTED: Blog delete POST' });
};

// Display Blog update form on GET.
exports.blog_update_get = function (req, res) {
  res.json({ message: 'NOT IMPLEMENTED: Blog update GET' });
};

// Handle Blog update on POST.
exports.blog_update_post = function (req, res) {
  res.json({ message: 'NOT IMPLEMENTED: Blog update POST' });
};
