const express = require('express');
const { user } = require('../controller');
const { authenticateJWT } = require('../middleware/token');

const router = express.Router();

router.route('/getBlogs').get(authenticateJWT, user.getAllBlogs);
router.route('/addBlog/:id').post(authenticateJWT, user.addBlog);
router.route('/getUserBlogs/:id').get(authenticateJWT, user.getUserBlogs);
router.route('/updateBlog/:id').put(authenticateJWT, user.updateBlog);
router.route('/deleteBlog/:id').delete(authenticateJWT, user.deleteBlog);
router.route('/getSingleBlog/:id').get(authenticateJWT, user.getSingleBlog);

module.exports = router;