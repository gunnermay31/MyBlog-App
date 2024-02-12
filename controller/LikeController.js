// LikeController.js

const Post = require("../models/postModel");
const Like = require("../models/likeModel");

exports.likepost = async function(req,res){
    try{
          const {post,user} = req.body;
          const like = new Like({post,user});
          const savedLike = await like.save();

          const udpatedPost = await Post.findByIdAndUpdate(
            post,
            {$push:{likes: savedLike._id}},
            {new:true}
        ).populate("likes").exec();

        res.json({
            post:udpatedPost,
            like:savedLike,
        });
    }
    catch(error){
        console.error(error);
        return  res.status(400).json({
            error: "could'nt like",
        });
    }
};

exports.unlikePost = async(req,res)=>{
    try{
        const{post,like}= req.body;
        //find and delete the like collection 
        const deleteLike = await Like.findByIdAndDelete({
            post:post,_id:like
        });

        const udpatedPost = await Post.findByIdAndUpdate(
            post,
            {$pull:{likes:deleteLike._id}},
            {new:true}
        );
        res.json({
            post:udpatedPost
        });
    }
    catch(error){
        console.log(error.message);
        console.log(error);
        return res.status(400).json({
            error:"could'nt unlike post",
        });
    }

}
exports.dummyLink = (req, res) => {
    res.send("This is a dummy link");
};

