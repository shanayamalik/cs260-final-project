// TODO: Authentication controller
//
// Implement authentication logic:
//
// register(req, res)
// - Validate input (email, password, name)
// - Check if user already exists
// - Create new user (password auto-hashed by model)
// - Generate JWT token
// - Return user data + token
//
// login(req, res)
// - Validate input
// - Find user by email
// - Compare password using bcrypt
// - Generate JWT token
// - Return user data + token
//
// getMe(req, res)
// - Return authenticated user's data
// - User available from req.user (set by auth middleware)
//
// Helper: generateToken(userId)
// - Create JWT with user ID
// - Sign with JWT_SECRET
// - Return token
//
// Example:
// const User = require('../models/User');
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');
//
// exports.register = async (req, res) => {
//   try {
//     const { name, email, password, age } = req.body;
//     
//     // Check if user exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: 'User already exists' });
//     }
//
//     // Create user
//     const user = await User.create({ name, email, password, age });
//     const token = generateToken(user._id);
//
//     res.status(201).json({
//       user: { id: user._id, name, email, age },
//       token
//     });
//   } catch (error) {
//     res.status(500).json({ message: 'Server error' });
//   }
// };
