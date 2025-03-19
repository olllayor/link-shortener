import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config.js';
import shortenRouter from './routes/shorten.js';
import statsRouter from './routes/stats.js';
import redirectRouter from './routes/redirect.js';
import logger from './middleware/logger.js';



dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(logger);

app.use('/shorten', shortenRouter);
app.use('/', redirectRouter)
app.use('/stats', statsRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});