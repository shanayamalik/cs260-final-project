// TODO: LoginPage - Simple authentication
//
// Features to implement:
// - Email and password input fields (large, accessible)
// - "Log In" button
// - "Create Account" link → Navigate to SignUpPage (optional)
// - Call backend API: POST /api/auth/login
// - Save user data to localStorage or context on success
// - Navigate to HomePage after successful login
//
// For prototype, can simplify to:
// - Just email input (skip password validation)
// - Auto-login any email
// - Focus on UX over security
//
// Accessibility:
// - Large input fields (min 50px height)
// - Clear labels
// - Error messages in plain language
// - High contrast
//
// Example structure:
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Button from '../components/common/Button';
//
// export default function LoginPage() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();
//
//   const handleLogin = async () => {
//     // Call API or just save to localStorage for prototype
//     localStorage.setItem('user', JSON.stringify({ email }));
//     navigate('/home');
//   };
//
//   return (
//     <div className="login-page">
//       <h1>Welcome to SilverGuide</h1>
//       <input 
//         type="email" 
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         placeholder="Email"
//       />
//       <input 
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         placeholder="Password"
//       />
//       <Button onClick={handleLogin}>Log In</Button>
//     </div>
//   );
// }

export default function LoginPage() {
  return null;
}
