// TODO: Chat/Booking model/schema
//
// Define Chat schema for scheduled conversations
//
// Chat fields:
// - userId: ObjectId/Reference to User, required
// - volunteerId: String (from mockVolunteers), required
// - volunteerName: String
// - scheduledDate: Date, required
// - scheduledTime: String (e.g., "10:00 AM")
// - duration: Number (minutes, default: 30)
// - status: String, enum: ['scheduled', 'completed', 'cancelled']
// - helpType: String (conversation, hobby, tech-help)
// - feedback: Object {
//     rating: Number (1-5),
//     comment: String,
//     submittedAt: Date
//   }
// - createdAt: Date, default: Date.now
//
// Example (Mongoose):
// const mongoose = require('mongoose');
//
// const chatSchema = new mongoose.Schema({
//   userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
//   volunteerId: { type: String, required: true },
//   volunteerName: String,
//   scheduledDate: { type: Date, required: true },
//   scheduledTime: String,
//   duration: { type: Number, default: 30 },
//   status: { 
//     type: String, 
//     enum: ['scheduled', 'completed', 'cancelled'],
//     default: 'scheduled'
//   },
//   helpType: String,
//   feedback: {
//     rating: Number,
//     comment: String,
//     submittedAt: Date
//   },
//   createdAt: { type: Date, default: Date.now }
// });
//
// module.exports = mongoose.model('Chat', chatSchema);
