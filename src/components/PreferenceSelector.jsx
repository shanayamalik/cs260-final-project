// TODO: Create PreferenceSelector component for EASY TASK
//
// Props to implement:
// - onPreferencesChange: callback when preferences are updated
// - initialPreferences: object with default values
//
// Features:
// - Display 3 preference categories with simple options:
//   1. Communication Style: Quiet ↔ Chatty (toggle or slider)
//   2. Location: Nearby ↔ Farther Away (toggle or slider)
//   3. Age: Similar Age ↔ Any Age (toggle or slider)
// - Large, touch-friendly controls
// - Clear labels with plain language
// - Visual feedback for current selection
//
// Preference format:
// {
//   communicationStyle: 'quiet' | 'chatty',
//   location: 'nearby' | 'far',
//   agePreference: 'similar' | 'any'
// }
//
// State management:
// - Save preferences to localStorage on change
// - Pass to parent for volunteer matching
//
// Example usage:
// <PreferenceSelector 
//   onPreferencesChange={(prefs) => setPreferences(prefs)}
//   initialPreferences={savedPreferences}
// />
import React, { useState, useEffect } from "react";
import "../styles/PreferenceSlide.css";

export const preferenceConfig = [
  {
    key: "communicationStyle",
    label: "Communication Style",
    options: ["Listener", "Balanced", "Talkative"],
  },
  {
    key: "location",
    label: "Location",
    options: ["Nearby", "No Preference", "Online"],
  },
  {
    key: "agePreference",
    label: "Age Preference",
    options: ["Similar Age", "Any Age"],
  },
  {
    key: "language",
    label: "Preferred Language",
    options: ["English", "Spanish", "Mandarin", "Tagalog"],
  },
  // Add more preferences here
];


export default function PreferenceSelector({ onPreferencesChange, initialPreferences }) {
  const [preferences, setPreferences] = useState(() => {
    const saved = localStorage.getItem("preferences");
    // set the initial preference
    return saved ? JSON.parse(saved) : initialPreferences || {
      communicationStyle: "Balanced",
      location: "No Preference",
      agePreference: "Any Age"
    };
  });

  // Sync with local storage and parent
  useEffect(() => {
    localStorage.setItem("preferences", JSON.stringify(preferences));
    if (onPreferencesChange) {
      onPreferencesChange(preferences);
    }
  }, [preferences, onPreferencesChange]);

  // update the selected value for a given category
  const handleChange = (category, value) => {
    setPreferences((prev) => ({
      ...prev,
      [category]: value,
    }));
  };

  const formatLabel = (str) =>
    str.replace(/([A-Z])/g, " $1").replace(/^./, (s) => s.toUpperCase());
  
  // render the slider
  const renderSlider = (category, options) => {
    const currentValue = preferences[category];
    return (
      <div className="preference-category">
        <h3>{formatLabel(category)}</h3>
        <div className="preference-options">
          {options.map((option) => (
            <div key={option} className="preference-option">
              <button
                onClick={() => handleChange(category, option)}
                className={`preference-button ${currentValue === option ? "active" : ""}`}
              />
              <div className="preference-label">{option}</div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="preference-selector">
      {renderSlider("communicationStyle", preferenceOptions.communicationStyle)}
      {renderSlider("location", preferenceOptions.location)}
      {renderSlider("agePreference", preferenceOptions.agePreference)}
    </div>
  );
}
