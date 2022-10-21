var express = require('express');
var router = express.Router();

const blog_controller = require('../controllers/blogController');

// GET/POST request for creating a Blog.
router.get('/create', blog_controller.blog_create_get);
router.post('/create', blog_controller.blog_create_post);

// GET/POST request to delete Blog.
router.get('/:id/delete', blog_controller.blog_delete_get);
router.post('/:id/delete', blog_controller.blog_delete_post);

// GET/POST for updating Blog.
router.get('/:id/update', blog_controller.blog_update_get);
router.post('/:id/update', blog_controller.blog_update_post);

// GET request for one Blog.
router.get('/:id', blog_controller.blog_detail);

// GET request for list of all Blog items.
router.get('/', blog_controller.blog_list);

module.exports = router;
