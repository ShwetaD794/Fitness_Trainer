import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());

app.get('/', (req, res) => {
    res.send("Server is working!!!!!!!!!");
})

app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
})