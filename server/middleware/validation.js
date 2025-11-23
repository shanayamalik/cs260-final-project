// TODO: Request validation middleware
//
// Validate request body/params before processing
//
// validateRegister(req, res, next)
// - Validate registration fields
// - Check email format
// - Check password strength (min 6 chars)
// - Return 400 if invalid
//
// validateLogin(req, res, next)
// - Validate login fields
// - Ensure email and password provided
//
// validateChatBooking(req, res, next)
// - Validate chat booking data
// - Ensure required fields present
// - Validate date is in future
//
// Example using express-validator:
// const { body, validationResult } = require('express-validator');
//
// exports.validateRegister = [
//   body('name').notEmpty().withMessage('Name is required'),
//   body('email').isEmail().withMessage('Valid email required'),
//   body('password').isLength({ min: 6 }).withMessage('Password must be 6+ chars'),
//   (req, res, next) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }
//     next();
//   }
// ];
