import express from "express";
import Hotel from "../models/Hotel.js";
import {
  createHotel,
  putHotel,
  deleteHotel,
  getHotel,
  getHotels,
} from "../controllers/hotel.js";

const router = express.Router();

// Create
router.post("/", createHotel);
//Update
router.put("/:id", putHotel);
// Delete
router.delete("/:id", deleteHotel);
//Get
router.get("/:id", getHotel);
//Get All
router.get("/", getHotels);

export default router;
