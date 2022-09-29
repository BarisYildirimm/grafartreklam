import mongoose from "mongoose";

const sloganSchema = mongoose.Schema({
  title: String,
  selectedFile: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Slogan = mongoose.model("Slogan", sloganSchema);
export default Slogan;
