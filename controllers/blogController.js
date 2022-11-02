const Blogs = require('../models/Blogs');

// Display list of all Blogs.
exports.blog_list = function (req, res) {
  Blogs.find({ status: 'published' })
    .sort({ createdAt: -1 })
    .exec(function (err, list_blogs) {
      if (err) {
        return next(err);
      }
      // Successful, so render.
      res.status(200).json({ blog_list: list_blogs });
    });
};

// Need an authoization check here for individual user blogs, no check for all blogs
exports.blog_list_user = function (req, res) {
  // Login required
  if (!req.user) {
    return res.status(401).json({ errors: 'You must be logged in' });
  }

  Blogs.find({ user: req.user._id })
    .sort({ createdAt: -1 })
    .exec(function (err, list_blogs) {
      if (err) {
        return next(err);
      }
      // Successful, so render.
      res.status(200).json({ blogs: list_blogs });
    });
};

// Display detail page for a specific Blog.
exports.blog_detail = function (req, res, next) {
  // Find the blog
  Blogs.findById(req.params.id)
    .populate('user')
    .exec(function (err, blog) {
      if (err) {
        return next(err);
      }
      if (blog === null) {
        // No results.
        const err = new Error('Blog not found');
        err.status = 404;
        return next(err);
      }
      // Success.
      res.status(200).json(blog);
    });
};

// Display Blog create form on GET.
exports.blog_create_get = function (req, res) {
  res.json({ message: 'NOT IMPLEMENTED: Blog create GET' });
};

// Handle Blog create on POST.
exports.blog_create_post = function (req, res, next) {
  // Login required
  if (!req.user) {
    return res.status(401).json({ errors: 'You must be logged in' });
  }

  // Validate request
  if (!req.body.title) {
    return res.status(400).json({ errors: 'Title is required' });
  }
  if (!req.body.content) {
    return res.status(400).json({ errors: 'Content is required' });
  }

  // Create a Blog
  const blog = new Blogs({
    title: req.body.title,
    content: req.body.content,
    status: req.body.status,
    user: req.user._id,
  }).save(function (err) {
    if (err) {
      return next(err);
    }
    // Successful - redirect to new blog record.
    res.status(200).json({ blog });
  });
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
  // Find the blog
  Blogs.findById(req.params.id, function (err, blog) {
    if (err) {
      return next(err);
    }
    if (blog === null) {
      // No results.
      const err = new Error('Blog not found');
      err.status = 404;
      return next(err);
    }
    // Success.
    res.status(200).json({ blog });
  });
};

// Update blog on put
exports.blog_update_put = function (req, res, next) {
  // Login required
  if (!req.user) {
    return res.status(401).json({ errors: 'You must be logged in' });
  }

  // Validate request
  if (!req.body.title) {
    return res.status(400).json({ errors: 'Title is required' });
  }
  if (!req.body.content) {
    return res.status(400).json({ errors: 'Content is required' });
  }

  // Find the blog
  Blogs.findById(req.params.id, function (err, blog) {
    if (err) {
      return next(err);
    }
    if (blog === null) {
      // No results.
      const err = new Error('Blog not found');
      err.status = 404;
      return next(err);
    }
    // Success.
    blog.title = req.body.title;
    blog.content = req.body.content;
    blog.status = req.body.status;
    blog.save(function (err) {
      if (err) {
        return next(err);
      }
      // Successful - redirect to new blog record.
      res.status(200).json({ blog });
    });
  });
};

// Handle Blog update on POST.
exports.blog_update_post = function (req, res) {
  res.json({ message: 'NOT IMPLEMENTED: Blog update POST' });
};
