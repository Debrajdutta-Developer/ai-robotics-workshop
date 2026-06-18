import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { apiRateLimiter } from './middleware/rateLimiter';
import { errorHandler } from './middleware/errorHandler';
import enquiryRoutes from './routes/enquiryRoutes';

dotenv.config();

// ... imports ...

const app = express();
const PORT = process.env.PORT || 5000;

app.set('trust proxy', 1);

// Middleware
app.use(cors());
app.use(express.json());
app.use(apiRateLimiter);

// Routes
app.use('/api', enquiryRoutes);

// Health Check
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Server is running smoothly' });
});

// Error Handler
app.use(errorHandler);

if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`[server]: Server is running at http://localhost:${PORT}`);
  });
}

export default app;// Trigger build
