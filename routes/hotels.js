import express from "express";
import Hotel from "../models/Hotel.js";
import {
  createHotel,
  putHotel,
  deleteHotel,
  getHotel,
  getHotels,
} from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// Create
router.post("/", verifyAdmin, createHotel);
//Update
router.put("/:id", verifyAdmin, putHotel);
// Delete
router.delete("/:id", verifyAdmin, deleteHotel);
//Get
router.get("/:id", getHotel);
//Get All
router.get("/", getHotels);

export default router;
