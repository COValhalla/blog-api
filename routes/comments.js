var express = require('express');
var router = express.Router();

const comment_controller = require('../controllers/commentController');

// GET/POST request for creating a Comment.
router.get('/create', comment_controller.comment_create_get);
router.post('/create', comment_controller.comment_create_post);

// GET/POST request to delete Comment.
router.get('/:id/delete', comment_controller.comment_delete_get);
router.delete('/:id/delete', comment_controller.comment_delete_post);

// GET/POST for updating Comment.
router.get('/:id/update', comment_controller.comment_update_get);
router.put('/:id/update', comment_controller.comment_update_post);

// GET request for one Comment.
router.get('/:id', comment_controller.comment_detail);

// GET request for list of all Comment items.
router.get('/', comment_controller.comment_list);

module.exports = router;
