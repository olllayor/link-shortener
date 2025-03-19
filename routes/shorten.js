import express from 'express';
import { nanoid } from 'nanoid';
import Link from '../models/link.js';

const router = express.Router();

router.post("/", async (req, res)=> {
    const { originalUrl } = req.body;
    if(!originalUrl) {
        return res.status(400).json({ error: "Original URL is required" });
    }
    const shortCode = nanoid(4);
    const newLink = new Link({ shortCode, originalUrl });

    await newLink.save();
    res.json({shortUrl: `${process.env.BASE_URL}/${shortCode}`});
})

export default router;