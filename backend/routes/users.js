import express from "express";
import { authMiddleware, restrictTo } from "../middleware/auth.js";
import { getAllUsers } from "../controller/userController.js";

const router = express.Router();

router.get("/", authMiddleware, restrictTo("admin"), getAllUsers);

export default router;
