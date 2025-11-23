// TODO: Authentication routes
//
// Define authentication API endpoints:
//
// POST /api/auth/register
// - Create new user account
// - Hash password with bcrypt
// - Return JWT token
// - Body: { name, email, password, age }
//
// POST /api/auth/login
// - Authenticate user
// - Compare password
// - Return JWT token
// - Body: { email, password }
//
// GET /api/auth/me
// - Get current user info
// - Requires auth middleware
// - Return user data (no password)
//
// Example:
// const express = require('express');
// const router = express.Router();
// const { register, login, getMe } = require('../controllers/authController');
// const { protect } = require('../middleware/auth');
//
// router.post('/register', register);
// router.post('/login', login);
// router.get('/me', protect, getMe);
//
// module.exports = router;
