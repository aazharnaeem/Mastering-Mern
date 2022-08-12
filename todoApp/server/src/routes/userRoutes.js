const express = require('express');
const user = require('../controller/userController')
const router = express.Router();
const { authenticateJWT } = require('../middleware/token')

router.route('/addTodo/:id').post(authenticateJWT, user.addTodo);
router.route('/getTodo/:id').get(authenticateJWT, user.getTodos);
router.route('/update/:id').patch(authenticateJWT, user.updateTodo);
router.route('/removeTodo/:id').delete(authenticateJWT, user.deleteTodo);

module.exports = router