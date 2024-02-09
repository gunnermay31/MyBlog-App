const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    user:{
        type:String,
        required:true,
    },
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Like", // Use the string "Like" as the reference
    }],
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment", // Use the string "Comment" as the reference
    }]
});

module.exports = mongoose.model("Post", postSchema);


