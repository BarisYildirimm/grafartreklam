import mongoose from "mongoose";

const statisticSchema = mongoose.Schema({
  project: String,
  product: String,
  service: String,
  help: String,
  team: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Statistic = mongoose.model("Statistic", statisticSchema);
export default Statistic;
