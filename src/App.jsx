import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import './styles/global.css';
import './App.css';
import VolunteersPage from "./pages/VolunteersPage";
function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/volunteers" element={<VolunteersPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

