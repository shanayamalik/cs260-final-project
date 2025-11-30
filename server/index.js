import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import OpenAI from 'openai';

const app = express();
const PORT = process.env.PORT || 3001;

// In-memory storage (replace with JSON file if needed)
let users = [];
let chats = [];

// Middleware
app.use(cors());
app.use(express.json());

// OpenAI setup
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// Routes
app.get('/', (req, res) => {
  res.send('SilverGuide API is running');
});


app.post('/api/chats', (req, res) => {
  const { volunteerId, volunteerName, slot } = req.body;

  if (!volunteerId || !volunteerName || !slot) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const chat = {
    id: chats.length + 1,
    volunteerId,
    volunteerName,
    slot,
    createdAt: new Date().toISOString(),
  };

  chats.push(chat); // save into memory

  console.log("💬 Saved new chat:", chat);

  return res.status(201).json({ success: true, chat });
});


app.get('/api/chats/user/:userId', (req, res) => {
  const { userId } = req.params;

  const userChats = chats.filter(chat => chat.userId === Number(userId));

  return res.json(userChats);
});


// Start server
app.listen(PORT, () => {
  console.log(`SilverGuide server running on port ${PORT}`);
});

