import express from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
} from "../controllers/authController";
import { authenticateUser } from "../middleWare/authenticateUser";
import { updateUser } from "../controllers/userController";
import {
  createTodo,
  getTodos,
  removeTodo,
  updateTodo,
} from "../controllers/todoController";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);

router.patch("/updateUser", authenticateUser, updateUser);

router.post("/createTodo", authenticateUser, createTodo);
router.get("/getTodos", authenticateUser, getTodos);
// router.patch("/updateIsDoneTodo", authenticateUser, updateIsDoneTodo);
router.patch("/updateTodo", authenticateUser, updateTodo);
// router.patch("/updateColorTodo", authenticateUser, updateColorTodo);
router.delete("/removeTodo", authenticateUser, removeTodo);
export default router;
