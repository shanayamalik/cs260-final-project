// TODO: User model/schema
//
// Define User schema for database (MongoDB/Mongoose or PostgreSQL/Sequelize)
//
// User fields:
// - name: String, required
// - email: String, required, unique
// - password: String, required (hashed with bcrypt)
// - age: Number
// - preferences: Object {
//     helpType: String,
//     communicationStyle: String,
//     location: String,
//     agePreference: String
//   }
// - interests: [String]
// - createdAt: Date, default: Date.now
// - updatedAt: Date
//
// Methods:
// - comparePassword(candidatePassword): compare password for login
//
// Example (Mongoose):
// const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');
//
// const userSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   age: Number,
//   preferences: {
//     helpType: String,
//     communicationStyle: String,
//     location: String,
//     agePreference: String
//   },
//   interests: [String],
//   createdAt: { type: Date, default: Date.now },
//   updatedAt: Date
// });
//
// // Hash password before saving
// userSchema.pre('save', async function(next) {
//   if (!this.isModified('password')) return next();
//   this.password = await bcrypt.hash(this.password, 10);
//   next();
// });
//
// module.exports = mongoose.model('User', userSchema);
