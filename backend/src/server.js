import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import authRouter from './routes/authRoutes.js';
import userRouter from './routes/userRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);

app.get('/', (req, res) => {
    res.send("Server is working!!!");
})

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("Successfully connected to database");
    } catch (error) {
        console.log("Failed to connect to database!");
        console.log("Error:", error);
    }
}

connectDB()
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server started at port ${PORT}`);
    })
})
