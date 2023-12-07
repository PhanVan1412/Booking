import express from "express";
import {
  createUser,
  putUser,
  deleteUser,
  getUser,
  getUsers,
} from "../controllers/user.js";

const router = express.Router();
// Create
router.post("/", createUser);
//Update
router.put("/:id", putUser);
// Delete
router.delete("/:id", deleteUser);
//Get
router.get("/:id", getUser);
//Get All
router.get("/", getUsers);
export default router;
