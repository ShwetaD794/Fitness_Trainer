import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

export const registerUser = async (req, res) => {
    try {
        const { username, email, password, age, weight, height, goal} = req.body;

        const existingUser = await User.findOne({username});
        if(existingUser) {
            return res.status(400).json({message: "User already exists"});
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            username,
            email,
            password: hashedPassword,
            age,
            weight,
            height,
            goal
        });

        res.status(201).json({message: "User registered successfully"});

    } catch (error) {
        res.status(500).json({message: "Unable to register user"});
        console.log("Error in regitsterUser", error);
    }
}

export const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await User.findOne({username});
        if(!user) {
            res.status(400).json({message: "Invalid credentials"});
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) {
            return res.status(400).json({message: "Invalid credentials"});
        }

        const token = jwt.sign(
            {id: user._id},
            process.env.JWT_SECRET,
            {expiresIn: "1d"}
        )

        res.json({token, user});
    } catch (error) {
        res.status(500).json({message: "Failed to Log in"});
        console.log("Error in loginUser", error);
    }
}