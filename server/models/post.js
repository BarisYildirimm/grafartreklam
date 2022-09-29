import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: String,
  desc: String,
  selectedFile: String,
  creatorImage:String,
  name:String,
  videoFile:String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Post = mongoose.model("Post", postSchema);
export default Post;
