import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: { type: String },
  desc: { type: String },
  ig: { type: String },
  email: { type: String },
  password: { type: String },
  selectedFile: { type: String },
  id: { type: String },
});

export default mongoose.model("User", userSchema);
