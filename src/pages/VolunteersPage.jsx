// TODO: VolunteersPage - MEDIUM TASK
//
// This page implements the Medium Task where seniors:
// 1. Browse personalized volunteer recommendations
// 2. Compare 2-3 volunteers side-by-side
// 3. Select a volunteer
// 4. Schedule a chat time
//
// Components to use:
// - Header
// - VolunteerComparison (shows 2-3 volunteers)
// - SchedulingCalendar (after volunteer selection)
// - Button
//
// Flow:
// 1. Load preferences from localStorage or API
// 2. Filter mock volunteers based on preferences (matching algorithm)
// 3. Display top 2-3 matches using VolunteerComparison
// 4. User selects a volunteer
// 5. Show SchedulingCalendar
// 6. User picks date/time
// 7. Save to backend: POST /api/chats
// 8. Navigate to DashboardPage with confirmation
//
// State management:
// - volunteers: filtered volunteer list
// - selectedVolunteer: chosen volunteer object
// - showScheduling: boolean (toggle between comparison and scheduling)
//
// Data source:
// - Import from mockVolunteers.js
// - Filter based on user preferences
//
// Example structure:
// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Header from '../components/common/Header';
// import VolunteerComparison from '../components/VolunteerComparison';
// import SchedulingCalendar from '../components/SchedulingCalendar';
// import { mockVolunteers } from '../data/mockVolunteers';
//
// export default function VolunteersPage() {
//   const [volunteers, setVolunteers] = useState([]);
//   const [selectedVolunteer, setSelectedVolunteer] = useState(null);
//   const [showScheduling, setShowScheduling] = useState(false);
//   const navigate = useNavigate();
//
//   useEffect(() => {
//     // Load preferences and filter volunteers
//     const prefs = JSON.parse(localStorage.getItem('preferences'));
//     const filtered = mockVolunteers.filter(/* matching logic */);
//     setVolunteers(filtered.slice(0, 3)); // Top 3 matches
//   }, []);
//
//   const handleVolunteerSelect = (id) => {
//     const volunteer = volunteers.find(v => v.id === id);
//     setSelectedVolunteer(volunteer);
//     setShowScheduling(true);
//   };
//
//   const handleSchedule = async (slot) => {
//     // Save to backend or localStorage
//     navigate('/dashboard');
//   };
//
//   return (
//     <div className="volunteers-page">
//       <Header title="Your Volunteer Matches" showBack showHome />
//       {!showScheduling ? (
//         <VolunteerComparison 
//           volunteers={volunteers}
//           onSelect={handleVolunteerSelect}
//         />
//       ) : (
//         <SchedulingCalendar 
//           volunteerId={selectedVolunteer.id}
//           volunteerName={selectedVolunteer.name}
//           onSchedule={handleSchedule}
//         />
//       )}
//     </div>
//   );
// }

// TODO: VolunteersPage - MEDIUM TASK
//
// This page implements the Medium Task where seniors:
// 1. Browse personalized volunteer recommendations
// 2. Compare 2-3 volunteers side-by-side
// 3. Select a volunteer
// 4. Schedule a chat time
//
// Components to use:
// - Header
// - VolunteerComparison (shows 2-3 volunteers)
// - SchedulingCalendar (after volunteer selection)
// - Button
//
// Flow:
// 1. Load preferences from localStorage or API
// 2. Filter mock volunteers based on preferences (matching algorithm)
// 3. Display top 2-3 matches using VolunteerComparison
// 4. User selects a volunteer
// 5. Show SchedulingCalendar
// 6. User picks date/time
// 7. Save to backend: POST /api/chats
// 8. Navigate to DashboardPage with confirmation
//
// State management:
// - volunteers: filtered volunteer list
// - selectedVolunteer: chosen volunteer object
// - showScheduling: boolean (toggle between comparison and scheduling)
//
// Data source:
// - Import from mockVolunteers.js
// - Filter based on user preferences
//
// Example structure:
// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Header from '../components/common/Header';
// import VolunteerComparison from '../components/VolunteerComparison';
// import SchedulingCalendar from '../components/SchedulingCalendar';
// import { mockVolunteers } from '../data/mockVolunteers';
//
// export default function VolunteersPage() {
//   const [volunteers, setVolunteers] = useState([]);
//   const [selectedVolunteer, setSelectedVolunteer] = useState(null);
//   const [showScheduling, setShowScheduling] = useState(false);
//   const navigate = useNavigate();
//
//   useEffect(() => {
//     // Load preferences and filter volunteers
//     const prefs = JSON.parse(localStorage.getItem('preferences'));
//     const filtered = mockVolunteers.filter(/* matching logic */);
//     setVolunteers(filtered.slice(0, 3)); // Top 3 matches
//   }, []);
//
//   const handleVolunteerSelect = (id) => {
//     const volunteer = volunteers.find(v => v.id === id);
//     setSelectedVolunteer(volunteer);
//     setShowScheduling(true);
//   };
//
//   const handleSchedule = async (slot) => {
//     // Save to backend or localStorage
//     navigate('/dashboard');
//   };
//
//   return (
//     <div className="volunteers-page">
//       <Header title="Your Volunteer Matches" showBack showHome />
//       {!showScheduling ? (
//         <VolunteerComparison 
//           volunteers={volunteers}
//           onSelect={handleVolunteerSelect}
//         />
//       ) : (
//         <SchedulingCalendar 
//           volunteerId={selectedVolunteer.id}
//           volunteerName={selectedVolunteer.name}
//           onSchedule={handleSchedule}
//         />
//       )}
//     </div>
//   );
// }

// src/pages/VolunteersPage.jsx

// VolunteersPage - MEDIUM TASK
//
// This page implements the Medium Task where seniors:
// 1. Browse personalized volunteer recommendations
// 2. Compare 2-3 volunteers side-by-side
// 3. Select a volunteer
// 4. Schedule a chat time

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../components/common/Header";
import VolunteerComparison from "../components/VolunteerComparison";
import SchedulingCalendar from "../components/SchedulingCalendar";
import { mockVolunteers } from "../data/mockVolunteers";

export default function VolunteersPage() {
  // Filtered top matches
  const [volunteers, setVolunteers] = useState([]);
  // Currently selected volunteer id
  const [selectedVolunteerId, setSelectedVolunteerId] = useState(null);
  // Whether we are in scheduling step
  const [showScheduling, setShowScheduling] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    // 1. Load preferences from localStorage (if they exist)
    const prefsRaw = localStorage.getItem("preferences");
    let filtered = mockVolunteers;

    if (prefsRaw) {
      try {
        const prefs = JSON.parse(prefsRaw);

        // TODO: Replace with real matching logic.
        // For now, we do a simple demo filter based on a "helpType" field if present.
        if (prefs.helpType) {
          const keyword = String(prefs.helpType).toLowerCase();
          filtered = mockVolunteers.filter((v) =>
            Array.isArray(v.interests) &&
            v.interests.some((i) => i.toLowerCase().includes(keyword))
          );
          // Fallback if filter removes everything
          if (filtered.length === 0) {
            filtered = mockVolunteers;
          }
        }
      } catch (e) {
        console.warn("Failed to parse preferences; using all volunteers.", e);
        filtered = mockVolunteers;
      }
    }

    // 2. Take top 2–3 matches
    setVolunteers(filtered.slice(0, 3));
  }, []);

  const handleVolunteerSelect = (id) => {
    setSelectedVolunteerId(id);
    setShowScheduling(true);
  };

  const handleSchedule = async (slot) => {
    const volunteer = volunteers.find((v) => v.id === selectedVolunteerId);
    if (!volunteer) return;

    try{
      // 7. Save to backend: POST /api/chats
      await fetch("/api/chats", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          volunteerId: volunteer.id,
          volunteerName: volunteer.name,
          slot, // e.g. { date, time } from SchedulingCalendar
        }),
      });
    } catch (err) {
      console.error("Failed to save chat request:", err);
      // You could show a toast or inline error here
    }

    // 8. Navigate to DashboardPage with confirmation
    navigate("/dashboard");
  };

  const selectedVolunteer =
    volunteers.find((v) => v.id === selectedVolunteerId) || null;

  return (
    <div className="container" style={{ padding: "2rem 0" }}>
      <Header title="Your Volunteer Matches" showBack showHome />

      {!showScheduling && (
        <>
          <p
            style={{
              textAlign: "center",
              margin: "1rem 0 2rem",
              color: "#666",
            }}
          >
            These are your top volunteer matches based on your preferences.
          </p>

          <VolunteerComparison
            volunteers={volunteers}
            onSelect={handleVolunteerSelect}
            selectedId={selectedVolunteerId}
          />
        </>
      )}

      {showScheduling && selectedVolunteer && (
        <div style={{ maxWidth: "480px", margin: "2rem auto 0" }}>
          <h2 style={{ textAlign: "center", marginBottom: "0.5rem" }}>
            Schedule a chat with {selectedVolunteer.name}
          </h2>
          <p
            style={{
              textAlign: "center",
              marginBottom: "1.5rem",
              color: "#666",
            }}
          >
            Choose a time that works for you. We’ll send this request to your
            volunteer.
          </p>

          <SchedulingCalendar
            volunteerId={selectedVolunteer.id}
            volunteerName={selectedVolunteer.name}
            onSchedule={handleSchedule}
            // optional: go back to comparison if they change their mind
            onBack={() => setShowScheduling(false)}
          />
        </div>
      )}
    </div>
  );


}