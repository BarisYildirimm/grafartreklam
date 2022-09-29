import express from "express";
import {getStatistic,updateStatistic} from "../controllers/statistic.js"

const router = express.Router();

router.get("/", getStatistic);
router.patch("/guncelle/:id", updateStatistic);
export default router;