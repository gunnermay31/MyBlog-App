const Post = require("../models/postModel");

exports.createPost = async function(req,res){

    try{

        const { title , body} = req.body;
        const post = new Post({
            title,body,
        });
        const savedPost = await post.save();

        res.status(200).json({
            post:savedPost,
        });
    }
    catch(error){
         return res.status(400).json({
            error:"error in creating the post",
         });
    }
};

exports.GetAllPosts = async function(req,res){
    try{
        const posts = await Post.find().populate("comments").exec();
        res.json({
            posts,
        })
    }
    catch(error){
        return res.status(400).json({
            error:"error in creating the post",
         });
    }
}
