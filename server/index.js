import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import OpenAI from 'openai';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// File paths
const DATA_DIR = path.join(__dirname, 'data');
const USERS_FILE = path.join(DATA_DIR, 'users.json');

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

// Helper to read users
const readUsers = () => {
  if (!fs.existsSync(USERS_FILE)) {
    return [];
  }
  try {
    const data = fs.readFileSync(USERS_FILE, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Error reading users file:', err);
    return [];
  }
};

// Helper to write users
const writeUsers = (users) => {
  try {
    fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
  } catch (err) {
    console.error('Error writing users file:', err);
  }
};

// Initialize users from file
let users = readUsers();
let chats = [];

// Middleware
app.use(cors());
app.use(express.json());

// OpenAI setup
let openai;
try {
  if (process.env.OPENAI_API_KEY) {
    openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY
    });
  } else {
    console.warn('Warning: OPENAI_API_KEY is missing. AI features will not work.');
  }
} catch (error) {
  console.warn('Error initializing OpenAI client:', error.message);
}

// Routes
app.get('/', (req, res) => {
  res.send('SilverGuide API is running');
});

// --- AI Chat Route ---
app.post('/api/chat', async (req, res) => {
  if (!openai) {
    return res.status(503).json({ message: 'AI service not configured (missing API key)' });
  }

  const { messages } = req.body;
  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ message: 'Invalid messages format' });
  }

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", // or gpt-4 if available/preferred
      messages: [
        { 
          role: "system", 
          content: "You are SilverGuide, a friendly and empathetic volunteer coordinator for seniors. Your goal is to interview the user to find out their hobbies, skills, and availability. Keep your responses short (1-2 sentences max), warm, and encouraging. Ask one question at a time. Do not be pushy. IMPORTANT: If the user shares personal identifiable information (like home address, phone number, or full financial info), you MUST address this FIRST. Kindly remind them not to share private details with you or potential matches, and reassure them that you do not record or store this information privately. Only after this warning should you briefly acknowledge their other input." 
        },
        ...messages
      ],
      temperature: 0.7,
      max_tokens: 150,
    });

    const aiResponse = completion.choices[0].message.content;
    res.json({ message: aiResponse });

  } catch (error) {
    console.error('OpenAI API Error:', error);
    res.status(500).json({ message: 'Error generating AI response' });
  }
});

// Auth Routes
app.post('/api/auth/register', (req, res) => {
  const { email, password, name, securityQuestion, securityAnswer } = req.body;
  
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  const existingUser = users.find(u => u.email === email);
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }

  const newUser = {
    id: Date.now().toString(),
    email,
    password, // In a real app, hash this!
    name: name || email.split('@')[0],
    securityQuestion,
    securityAnswer: securityAnswer ? securityAnswer.toLowerCase().trim() : null,
    preferences: {}
  };

  users.push(newUser);
  writeUsers(users);
  res.status(201).json({ user: { id: newUser.id, email: newUser.email, name: newUser.name } });
});

app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  
  const user = users.find(u => u.email === email && u.password === password);
  
  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  res.json({ user: { id: user.id, email: user.email, name: user.name } });
});

app.get('/api/auth/security-question', (req, res) => {
  const { email } = req.query;
  const user = users.find(u => u.email === email);
  
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  
  if (!user.securityQuestion) {
    return res.status(400).json({ message: 'No security question set for this account' });
  }

  res.json({ question: user.securityQuestion });
});

app.post('/api/auth/reset-password', (req, res) => {
  const { email, securityAnswer, newPassword } = req.body;
  
  const user = users.find(u => u.email === email);
  
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  if (!user.securityAnswer || user.securityAnswer !== securityAnswer.toLowerCase().trim()) {
    return res.status(401).json({ message: 'Incorrect security answer' });
  }

  user.password = newPassword;
  writeUsers(users);
  res.json({ message: 'Password updated successfully' });
});

app.listen(PORT, () => {
  console.log(`SilverGuide server running on port ${PORT}`);
});

