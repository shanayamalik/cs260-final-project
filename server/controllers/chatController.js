// TODO: Chat controller
//
// Implement chat/booking management logic:
//
// createChat(req, res)
// - Create new scheduled chat (Medium Task)
// - Validate date/time
// - Save chat to database
// - Return created chat
//
// getUserChats(req, res)
// - Get all chats for a user
// - Filter by status if provided in query
// - Sort by scheduledDate
// - Return array of chats
//
// getChat(req, res)
// - Get single chat by ID
// - Verify user owns this chat
// - Return chat details
//
// updateChat(req, res)
// - Update chat (reschedule or cancel)
// - Update scheduledDate, scheduledTime, or status
// - Return updated chat
//
// submitFeedback(req, res)
// - Add feedback to completed chat
// - Update chat with rating and comment
// - Mark submittedAt timestamp
// - Return updated chat
//
// Example:
// const Chat = require('../models/Chat');
//
// exports.createChat = async (req, res) => {
//   try {
//     const { volunteerId, volunteerName, scheduledDate, scheduledTime, helpType } = req.body;
//     
//     const chat = await Chat.create({
//       userId: req.user.id,
//       volunteerId,
//       volunteerName,
//       scheduledDate,
//       scheduledTime,
//       helpType,
//       status: 'scheduled'
//     });
//
//     res.status(201).json(chat);
//   } catch (error) {
//     res.status(500).json({ message: 'Server error' });
//   }
// };
//
// exports.getUserChats = async (req, res) => {
//   try {
//     const { status } = req.query;
//     const filter = { userId: req.params.userId };
//     if (status) filter.status = status;
//
//     const chats = await Chat.find(filter).sort({ scheduledDate: 1 });
//     res.json(chats);
//   } catch (error) {
//     res.status(500).json({ message: 'Server error' });
//   }
// };
