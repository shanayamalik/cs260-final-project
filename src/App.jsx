import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import './styles/global.css';
import './App.css';
import PreferencesPage from './pages/PreferencesPage';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/preferences_page" element={<PreferencesPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

