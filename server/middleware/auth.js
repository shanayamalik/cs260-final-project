// TODO: Authentication middleware
//
// Protect routes that require authentication
//
// protect(req, res, next)
// - Verify JWT token from Authorization header
// - Token format: "Bearer <token>"
// - Decode token to get user ID
// - Attach user to req.user
// - Call next() if valid
// - Return 401 if invalid or missing
//
// Example:
// const jwt = require('jsonwebtoken');
// const User = require('../models/User');
//
// exports.protect = async (req, res, next) => {
//   let token;
//
//   if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
//     try {
//       // Get token from header
//       token = req.headers.authorization.split(' ')[1];
//
//       // Verify token
//       const decoded = jwt.verify(token, process.env.JWT_SECRET);
//
//       // Get user from token
//       req.user = await User.findById(decoded.id).select('-password');
//
//       next();
//     } catch (error) {
//       return res.status(401).json({ message: 'Not authorized, token failed' });
//     }
//   }
//
//   if (!token) {
//     return res.status(401).json({ message: 'Not authorized, no token' });
//   }
// };
