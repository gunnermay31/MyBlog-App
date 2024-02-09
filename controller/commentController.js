const Post = require("../models/postModel");
const Comment = require("../models/commentModel");

const createComment = async function(req, res) {
    try {
        // Destructure the necessary properties from req.body
        const { postId, user, body } = req.body;

        // Create a new comment instance
        const comment = new Comment({ post: postId, user, body });

        // Save the comment
        const savedComment = await comment.save();

        // Update the associated post with the new comment
        const updatedPost = await Post.findByIdAndUpdate(
            postId,
            { $push: { comments: savedComment._id } },
            { new: true }
        )
        .populate("comments") // populate the comments array with comment documents
        .exec();

        res.json({
            post: updatedPost,
        });
    } catch (err) {
        return res.status(500).json({
            error: "Error while creating the comments",
        });
    }
};

module.exports = { createComment };
