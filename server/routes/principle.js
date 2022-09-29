import express from "express";
import {
  getPrinciple,
  createdPrinciple,
  updatePrinciple,
  deletePrinciple,
} from "../controllers/principles.js";


const router = express.Router();

router.get("/", getPrinciple);
router.post("/ekle", createdPrinciple);
router.patch("/guncelle/:id", updatePrinciple);
router.delete("/:id", deletePrinciple);

export default router;
