import exress, { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middlewares.js";
import { isAdmin } from "../middlewares/role.middlewares.js";
import {
    registerUser,
    loginUser,
    logoutUser,
} from "../controllers/auth.controllers.js";

const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", verifyJWT, logoutUser);

router.get("/profile", verifyJWT, (req, res) => {
    res.json(req.user);
});

router.get("/admin/dashboard", verifyJWT, isAdmin, (req, res) => {
    res.json({
        message: "Welcome Admin",
    });
});

export default router;
