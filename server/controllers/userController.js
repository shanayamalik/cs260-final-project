// TODO: User controller
//
// Implement user management logic:
//
// getUser(req, res)
// - Get user by ID from params
// - Return user data (exclude password)
// - Verify user is accessing their own data
//
// updateUser(req, res)
// - Update user profile fields
// - Fields: name, age, preferences, interests
// - Return updated user
//
// updatePreferences(req, res)
// - Update user preferences from Easy Task
// - Fields: helpType, communicationStyle, location, agePreference
// - Return updated user
//
// updateInterests(req, res)
// - Update user interests from AI interview (Difficult Task)
// - Merge or replace interests array
// - Return updated user
//
// Example:
// const User = require('../models/User');
//
// exports.getUser = async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id).select('-password');
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }
//     res.json(user);
//   } catch (error) {
//     res.status(500).json({ message: 'Server error' });
//   }
// };
//
// exports.updatePreferences = async (req, res) => {
//   try {
//     const user = await User.findByIdAndUpdate(
//       req.params.id,
//       { preferences: req.body, updatedAt: Date.now() },
//       { new: true }
//     ).select('-password');
//     res.json(user);
//   } catch (error) {
//     res.status(500).json({ message: 'Server error' });
//   }
// };
