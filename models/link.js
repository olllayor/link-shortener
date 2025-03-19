import e from "cors";
import mongoose from "mongoose";

const linkSchema = new mongoose.Schema({
  shortCode: {
    type: String,
    required: true,
    unique: true,
  },
  originalUrl: {
    type: String,
    required: true,
  },
  clicks: {
    type: Number,
    default: 0,
  },
});

const Link = mongoose.model("Link", linkSchema);

export default Link;
