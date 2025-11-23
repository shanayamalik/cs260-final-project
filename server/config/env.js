// TODO: Environment variables configuration
//
// Load and validate environment variables using dotenv
//
// Required environment variables:
// - PORT: Server port (default: 3001)
// - MONGODB_URI: Database connection string
// - JWT_SECRET: Secret key for JWT token signing
// - OPENAI_API_KEY: OpenAI API key for AI interview (optional)
// - NODE_ENV: 'development' | 'production'
//
// Example:
// require('dotenv').config();
//
// module.exports = {
//   port: process.env.PORT || 3001,
//   mongoUri: process.env.MONGODB_URI,
//   jwtSecret: process.env.JWT_SECRET,
//   openaiKey: process.env.OPENAI_API_KEY,
//   nodeEnv: process.env.NODE_ENV || 'development'
// };
