// TODO: Error handling middleware
//
// Centralized error handler for all routes
//
// errorHandler(err, req, res, next)
// - Log error to console
// - Return appropriate status code and message
// - Handle different error types:
//   - Validation errors
//   - Database errors
//   - JWT errors
//   - General server errors
// - Don't expose sensitive error details in production
//
// Example:
// exports.errorHandler = (err, req, res, next) => {
//   console.error(err.stack);
//
//   // Mongoose validation error
//   if (err.name === 'ValidationError') {
//     return res.status(400).json({ 
//       message: 'Validation Error',
//       errors: Object.values(err.errors).map(e => e.message)
//     });
//   }
//
//   // JWT error
//   if (err.name === 'JsonWebTokenError') {
//     return res.status(401).json({ message: 'Invalid token' });
//   }
//
//   // Duplicate key error
//   if (err.code === 11000) {
//     return res.status(400).json({ message: 'Duplicate field value' });
//   }
//
//   // Default error
//   res.status(err.statusCode || 500).json({
//     message: err.message || 'Server Error'
//   });
// };
