import mongoose from "mongoose";
import { act } from "react";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  lastActive: {
    type: Date,
    required: true,
  },
  posX: {
    type: Number,
    required: true,
  },
  posY: {
    type: Number,
    required: true,
  },
});

const userModel = mongoose.models.users || mongoose.model("users", userSchema);

export default userModel;
