// TODO: Chat/Booking routes
//
// Define chat scheduling API endpoints:
//
// POST /api/chats
// - Schedule a new chat with a volunteer (Medium Task)
// - Requires authentication
// - Body: { volunteerId, volunteerName, scheduledDate, scheduledTime, helpType }
//
// GET /api/chats/user/:userId
// - Get all chats for a user (upcoming and past)
// - Requires authentication
// - Query params: ?status=scheduled|completed|cancelled
//
// GET /api/chats/:id
// - Get specific chat details
// - Requires authentication
//
// PUT /api/chats/:id
// - Update chat (reschedule or cancel)
// - Body: { scheduledDate, scheduledTime, status }
//
// POST /api/chats/:id/feedback
// - Submit feedback after chat completion
// - Body: { rating, comment }
//
// Example:
// const express = require('express');
// const router = express.Router();
// const {
//   createChat,
//   getUserChats,
//   getChat,
//   updateChat,
//   submitFeedback
// } = require('../controllers/chatController');
// const { protect } = require('../middleware/auth');
//
// router.post('/', protect, createChat);
// router.get('/user/:userId', protect, getUserChats);
// router.get('/:id', protect, getChat);
// router.put('/:id', protect, updateChat);
// router.post('/:id/feedback', protect, submitFeedback);
//
// module.exports = router;
