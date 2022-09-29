import express from "express";

import { signin, signup,getUsers,deleteUser,updateUser,getUsersDetails } from "../controllers/user.js";
const router = express.Router();

router.get("/",getUsers)
router.get("/details",getUsersDetails)
router.delete("/:id",deleteUser);
router.patch("/guncelle/:id", updateUser);
router.post("/signin", signin);
router.post("/signup", signup);

export default router;
