import express from "express";
import {
  createdSlogan,
  getSlogan
} from "../controllers/slogan.js";

const router = express.Router();
router.get("/", getSlogan);
router.post("/ekle", createdSlogan);

export default router;
