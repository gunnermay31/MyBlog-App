// blog.js
const express = require('express');
const router = express.Router();

// Import your controller
const { dummyLink } = require('../controller/LikeController');
const { createComment } = require('../controller/commentController');
const { createPost,getAllPost } = require('../controller/postController');

//creating mapping
router.get('/dummyroute',dummyLink);
router.post('/comments/create',createComment);
router.post('/post/create',createPost);
router.post('/getallposts',getAllPost);



//export

module.exports = router;
