const express = require("express");
const router = express.Router();


//Import Controller
const {dummyLink,likepost,unlikePost} = require("../controller/LikeController");
const {createComment} = require("../controller/commentController");
const {createPost,GetAllPosts} = require("../controller/postController");


//Mapping Create
router.get("/dummyroute", dummyLink);
router.post("/comments/create", createComment);
router.post("/posts/create", createPost);
router.get("/posts", GetAllPosts);
router.post("/likes/like",likepost);
router.post("/like/unlike",unlikePost);


//export
module.exports = router;
