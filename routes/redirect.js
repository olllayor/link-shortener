import express from "express";
import Link from "../models/link.js";

// Create a new router instance instead of importing from shorten.js
const router = express.Router();

router.get("/:shortCode", async (req, res) => {

  const { shortCode } = req.params;
  const link = await Link.findOne({
    shortCode,
  });

  if (!link) {
    return res.status(404).json({ error: "URL not found" });
  }

  link.clicks++;
  await link.save();

  // Add protocol if missing
  let redirectUrl = link.originalUrl;
  if (!redirectUrl.startsWith("http://") && !redirectUrl.startsWith("https://")) {
    redirectUrl = "https://" + redirectUrl;
  }
  console.log("Redirecting to: ", redirectUrl);
  res.redirect(redirectUrl);
});

export default router;
