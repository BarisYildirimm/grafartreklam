import express from "express";
import {
  getReference,
  createdReference,
  updateReference,
  deleteReference,
} from "../controllers/references.js";

import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", getReference);
router.post("/ekle", createdReference);
router.patch("/guncelle/:id", updateReference);
router.delete("/:id", deleteReference);

export default router;
