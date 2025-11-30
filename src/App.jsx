import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import './styles/global.css';
import './App.css';
import VolunteersPage from "./pages/VolunteersPage";
import SchedulingCalendar from "./components/SchedulingCalendar";
function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/volunteers" element={<VolunteersPage />} />
          {/*  SchedulingCalendar */}
          <Route
            path="/test-calendar"
            element={
              <SchedulingCalendar
                volunteerId={999}
                volunteerName="Test Volunteer"
                availableSlots={[
                  { date: "2025-11-25", time: "10:00 AM", duration: 30 },
                  { date: "2025-11-25", time: "2:00 PM", duration: 30 },
                  { date: "2025-11-26", time: "6:00 PM", duration: 30 },
                ]}
                onSchedule={(slot) => console.log("Scheduled slot:", slot)}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

