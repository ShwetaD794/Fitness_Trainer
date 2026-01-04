import express from 'express'
import { registerUser, loginUser } from '../controllers/authController.js';

const router = express.Router();

router.get('/signup', registerUser);
router.get('/login', loginUser);

export default router;