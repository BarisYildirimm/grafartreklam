import express from "express";
import {
  getPosts,
  createdPost,
  updatePost,
  deletePost,
  getPost,
} from "../controllers/posts.js";

import auth from "../middleware/auth.js";

const router = express.Router();
router.get("/posts", getPosts);
router.get("/posts/:id", getPost);
router.post("/haber/ekle", createdPost);
router.patch("/haber/guncelle/:id", updatePost);
router.delete("/haber/:id", deletePost);

export default router;
