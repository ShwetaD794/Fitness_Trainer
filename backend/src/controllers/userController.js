import User from '../models/User.js';

export const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({message: "Failed to fetch user"});
        console.log("Error in getUser", error);
    }
}