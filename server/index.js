import Express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv"
import path from "path";

import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/users.js";
import referenceRoutes from "./routes/reference.js";
import statisticRoutes from "./routes/statistic.js";
import sloganRoutes from "./routes/slogan.js";
import principleRoutes from "./routes/principle.js"

dotenv.config();
const app = Express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/api", postRoutes);
app.use("/api/user", userRoutes);
app.use("/api/referans", referenceRoutes);
app.use("/api/statistic", statisticRoutes);
app.use("/api/slogan", sloganRoutes);
app.use("/api/principle", principleRoutes);

const __dirname = path.resolve();
if (process.env.NODE_ENV === "production") {

  app.use(Express.static(path.join(__dirname, "client/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("working!");
  });
}

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Server ${PORT} Başlatıldı`);
    })
  )
  .catch((error) => console.log(error));
