import mongoose from "mongoose";

const referenceSchema = mongoose.Schema({
  title: String,
  selectedFile: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Reference = mongoose.model("Reference", referenceSchema);
export default Reference;
