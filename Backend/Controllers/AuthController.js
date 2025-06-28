const { UsersModel } = require("../Model/UsersModel");
const { createSecretToken } = require("../Utils/SecretToken");
const bcrypt = require("bcryptjs");

const Signup = async (req, res) => {
    try {
        const { email, username, password } = req.body;
        
        // Check if user already exists
        const existingUser = await UsersModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already registered" });
        }

        // Create new user
        const newUser = await UsersModel.create({
            email,
            username,
            password
        });

        // Create token
        const token = createSecretToken(newUser._id);

        // Set cookie
        res.cookie("token", token, {
            httpOnly: true,
            maxAge: 3 * 24 * 60 * 60 * 1000 // 3 days
        });

        res.status(201).json({ 
            success: true, 
            message: "User created successfully",
            user: {
                id: newUser._id,
                email: newUser.email,
                username: newUser.username
            }
        });
    } catch (error) {
        console.error("Signup error:", error);
        res.status(500).json({ message: "Signup failed" });
    }
};

const Login = async (req, res) => {
    try {
        const { email, password } = req.body;
        
        // Find user
        const user = await UsersModel.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        // Check password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        // Create token
        const token = createSecretToken(user._id);

        // Set cookie
        res.cookie("token", token, {
            httpOnly: true,
            maxAge: 3 * 24 * 60 * 60 * 1000 // 3 days
        });

        res.status(200).json({
            success: true,
            message: "Logged in successfully",
            user: {
                id: user._id,
                email: user.email,
                username: user.username
            }
        });
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ message: "Login failed" });
    }
};

module.exports = { Signup, Login };