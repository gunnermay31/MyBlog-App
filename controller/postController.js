const Post = require("../models/postModel");

exports.createPost = async function(req, res) {
    try {
        const { title, body } = req.body;
        const post = new Post({
          title,body,
        });
        const savedPost = await post.save();
        res.json({
            post: savedPost,
        });
    } catch(err) {
        return res.status(400).json({
            error: "Error while creating the post", // changed "err" to "error" for clarity
        });
    }
};

exports.getAllPosts = async function(req,res){
    try{
        const posts =  await Post.find().populate("likes").populate("comments").exec();

        res.json({
            posts,
        })
    } catch(err) {
        return res.status(400).json({
            error: "Error while creating the post", // changed "err" to "error" for clarity
        });
    }

}

