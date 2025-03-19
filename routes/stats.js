import express from "express";
import Link from "../models/link.js";

const router = express.Router();

router.get("/:shortCode", async (req, res) => {
  const { shortCode } = req.params;
  const link = await Link.findOne({
    shortCode,
  });

  console.log("link: ", link);
  
  if (!link) {
    return res.status(404).json({ error: "URL not found" });
  }
  res.json({ originalUrl: link.originalUrl, clicks: link.clicks });
});

export default router;