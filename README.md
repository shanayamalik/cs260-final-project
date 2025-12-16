# SilverLink 🤝

**Connecting seniors with volunteer companions for meaningful relationships and support.**

SilverLink is a web application that helps older adults find and connect with volunteers for companionship, assistance with daily activities, and social engagement. The platform features an AI-powered voice interview, smart matching algorithm, and accessible dashboard.

---

## 📋 Features

- **AI Voice Interview** - Natural conversation to create personalized profile (supports 7 languages)
- **Smart Matching Algorithm** - Matches seniors with compatible volunteers based on interests, language, location, and availability
- **Accessible Dashboard** - Simple interface with large buttons, high contrast mode, and screen reader support
- **Scheduling System** - Create and manage visits with volunteers (Zoom, phone, in-person, etc.)
- **Multi-language Support** - Interface and voice recognition in 7 languages with text-to-speech
- **AI Chat Assistant** - Contextual help throughout the platform
- **Profile Customization** - Inline editing of preferences, interests, and bio

---

## 🚀 How to Build and Run

### Prerequisites
- **Node.js** v14 or higher ([Download here](https://nodejs.org/))
- **npm** (comes with Node.js)
- **OpenAI API Key** ([Get one here](https://platform.openai.com/api-keys))

### Installation & Setup

1. **Clone and install dependencies**
   \`\`\`bash
   git clone <repository-url>
   cd cs260-final-project
   npm install
   \`\`\`

2. **Configure environment variables**
   
   Create a \`.env\` file in the root directory:
   \`\`\`env
   OPENAI_API_KEY=your_openai_api_key_here
   PORT=3001
   \`\`\`

3. **Start the backend server**
   \`\`\`bash
   npm run server
   \`\`\`
   Backend runs on \`http://localhost:3001\`

4. **Start the frontend (in a new terminal)**
   \`\`\`bash
   npm run dev
   \`\`\`
   Frontend runs on \`http://localhost:5173\`

5. **Open in browser**
   
   Navigate to \`http://localhost:5173\` and create an account to get started

---

## 📁 Project Structure

\`\`\`
cs260-final-project/
├── src/
│   ├── components/          # UI components (VoiceInterview, VolunteerCard, etc.)
│   ├── pages/               # Main pages (HomePage, DashboardPage, etc.)
│   ├── data/                # Mock data for volunteers
│   ├── utils/               # Helper functions (matching algorithm, localStorage)
│   └── styles/              # Global CSS and variables
├── server/
│   ├── index.js             # Express backend server
│   ├── prompts/             # OpenAI prompt templates
│   └── data/users.json      # File-based user storage
├── public/                  # Static assets and icons
└── package.json
\`\`\`

---

## 🛠️ Technology Stack

**Frontend**
- React + React Router (navigation)
- Vite (build tool)
- Web Speech API (voice recognition & text-to-speech)
- CSS Variables (theming and accessibility)

**Backend**
- Express.js (REST API)
- OpenAI API (GPT-3.5-turbo for AI features)
- Node.js file system (data persistence)

**Accessibility**
- WCAG 2.1 AA compliant
- Large touch targets (44x44px minimum)
- High contrast mode and adjustable font sizes

---

## 🔄 User Flow

1. **Sign Up** - Create account with security question for password recovery
2. **Voice Interview** - Complete AI-guided conversation about preferences and needs
3. **Review Preferences** - Customize generated profile from interview
4. **Dashboard** - Access profile, volunteer matches, messages, and schedule
5. **Browse & Schedule** - Explore volunteer matches and book visits

---

## ⚠️ Known Limitations

- Uses mock volunteer data (not real profiles)
- Browser localStorage for user preferences (not persistent across devices)
- File-based backend (\`users.json\`) instead of database
- Basic authentication (no JWT/OAuth)
- Simulated messaging (not real-time)
- Relies on browser Speech API (limited browser support)

---

## 🧪 Development Commands

\`\`\`bash
npm run dev      # Start frontend development server
npm run server   # Start backend server
npm run build    # Build for production
npm test         # Run tests
npm run lint     # Lint code
\`\`\`

---

## 🎓 Academic Context

**CS 260 Final Project** - Brigham Young University

This project demonstrates full-stack web development with React/Express, RESTful API design, OpenAI integration, accessibility-first design, voice user interfaces, and client-side routing.

---

## 📝 License

Academic project - not licensed for commercial use.
