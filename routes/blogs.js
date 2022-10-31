var express = require('express');
var router = express.Router();
var passport = require('passport');

const blog_controller = require('../controllers/blogController');

// GET/POST request for creating a Blog.
router.get(
  '/create',
  passport.authenticate('jwt', { session: false }),
  blog_controller.blog_create_get,
);
router.post(
  '/create',
  passport.authenticate('jwt', { session: false }),
  blog_controller.blog_create_post,
);

// GET/POST request to delete Blog.
router.get(
  '/:id/delete',
  passport.authenticate('jwt', { session: false }),
  blog_controller.blog_delete_get,
);
router.delete(
  '/:id/delete',
  passport.authenticate('jwt', { session: false }),
  blog_controller.blog_delete_post,
);

// GET/POST for updating Blog.
router.get(
  '/:id/update',
  passport.authenticate('jwt', { session: false }),
  blog_controller.blog_update_get,
);
router.put(
  '/:id/update',
  passport.authenticate('jwt', { session: false }),
  blog_controller.blog_update_put,
);

// GET request for one Blog.
router.get('/:id', blog_controller.blog_detail);

// GET request for list of all Blog items.
router.get('/', blog_controller.blog_list);

// GET request for author's Blog items.
router.get('/', blog_controller.blog_list);

module.exports = router;
