// TODO: Create mock volunteer data for testing and demo
//
// Export an array of volunteer objects with the following structure:
// {
//   id: string (unique identifier)
//   name: string
//   photo: string (URL or path to image, or use placeholder)
//   age: number
//   location: string (city or "nearby" / "far")
//   interests: string[] (e.g., ['gardening', 'reading', 'cooking'])
//   communicationStyle: 'quiet' | 'chatty'
//   bio: string (short description, 2-3 sentences)
//   verified: boolean (background check completed)
//   availability: object {
//     days: string[] (e.g., ['Monday', 'Wednesday', 'Friday'])
//     times: string[] (e.g., ['morning', 'afternoon'])
//   }
// }
//
// Recommended: Create 15-20 diverse volunteers with varied:
// - Ages (50-80)
// - Interests (hobbies, activities, tech skills)
// - Communication styles (mix of quiet/chatty)
// - Locations (some nearby, some farther)
//
// This data will be used by:
// - VolunteersPage (Medium Task) for browsing
// - Matching algorithm to filter based on preferences
// - SchedulingCalendar to show availability
//
// Example:
// export const mockVolunteers = [
//   {
//     id: '1',
//     name: 'Margaret Chen',
//     photo: '/images/volunteers/margaret.jpg',
//     age: 68,
//     location: 'nearby',
//     interests: ['gardening', 'cooking', 'bird watching'],
//     communicationStyle: 'chatty',
//     bio: 'Retired teacher who loves sharing stories...',
//     verified: true,
//     availability: {
//       days: ['Tuesday', 'Thursday', 'Saturday'],
//       times: ['morning', 'afternoon']
//     }
//   },
//   // ... more volunteers
// ];

export const mockVolunteers = [];
