import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import './styles/global.css';
import './App.css';
import PreferenceWizard from './components/PreferenceWizard';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/preferences" element={<PreferenceWizard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

