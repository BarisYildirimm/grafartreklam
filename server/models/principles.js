import mongoose from "mongoose";

const principleSchema = mongoose.Schema({
  title: String,
  desc:String,
  selectedFile: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Principle = mongoose.model("Principle", principleSchema);
export default Principle;
