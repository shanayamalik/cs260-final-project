// Mock volunteer data for testing volunteer matching and display
// Diverse profiles with varying levels of optional information

export const mockVolunteers = [
  // Profile 1: Complete profile (all fields filled)
  {
    id: '1',
    name: 'Maria Santos',
    icon: '👩‍🏫',
    role: 'Retired Librarian',
    isActive: true,
    bio: 'Books brought me to this country, and now I want to share that love of reading with others.',
    helpsWith: ['Companionship', 'Reading Together', 'Library Help'],
    sharedInterests: ['Reading', 'Gardening'],
    languages: ['Portuguese', 'English', 'Spanish'],
    availability: 'Tue, Thu Mornings',
    skills: ['Book recommendations', 'Reading aloud', 'Organizing', 'Storytelling'],
    yearsVolunteering: 4,
    ageRange: '60-69',
    about: 'After 25 years as a librarian in São Paulo and later Boston, I retired but couldn\'t stay away from books. I host a small book club and enjoy reading aloud to those who find it difficult. I\'m patient, warm, and always have a good story recommendation.'
  },
  // Profile 2: Minimal optional info (no skills, languages, years, or age)
  {
    id: '2',
    name: 'Raj Patel',
    icon: '💻',
    role: 'Tech Helper',
    isActive: true,
    bio: 'Technology should make life easier, not harder. I\'m here to help bridge that gap.',
    helpsWith: ['Technology Help', 'Video Calls', 'Devices'],
    sharedInterests: ['Technology'],
    availability: 'Weekends',
    about: 'I spent 30 years in IT and now volunteer to help seniors navigate smartphones, tablets, and video calls. No question is too small—I\'ve heard them all!'
  },
  // Profile 3: Partial info (no about section, not currently active)
  {
    id: '3',
    name: 'Fatima Hassan',
    icon: '🎨',
    role: 'Crafts & Conversation',
    isActive: false,
    bio: 'I believe everyone has a story worth hearing.',
    helpsWith: ['Companionship', 'Crafts', 'Light Cooking'],
    sharedInterests: ['Crafts', 'Cooking', 'Tea'],
    languages: ['Urdu', 'English'],
    availability: 'Mon, Wed, Fri Afternoons',
    skills: ['Knitting', 'Painting', 'Baking'],
    yearsVolunteering: 2,
    ageRange: '50-59'
  }
];