var express = require('express');
var router = express.Router();
const user_controlller = require('../controllers/userController');

/* GET users listing. */
router.get('/', user_controlller.user_list);

router.post('/create', user_controlller.create);

router.post('/login', user_controlller.login);

module.exports = router;
