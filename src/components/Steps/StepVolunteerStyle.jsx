import React from "react";
import "../../styles/StepVolunteerStyle.css";

const VOLUNTEER_OPTIONS = [
  { key: "Talkative", label: "Talkative", icon: "talkative.svg" },
  { key: "Listener", label: "Listener", icon: "listener.svg" },
  { key: "No Preference", label: "No Preference", icon: "no-preference.svg" }
];

export default function StepVolunteerStyle({ selected, onChange, onNext, onBack }) {
  const selectOption = (key) => {
    onChange(key); // single-select
  };

  return (
    <div className="step-container">
      <h1>What is your communication style preference?</h1>

      <div className="tiles-row">
        {VOLUNTEER_OPTIONS.map(({ key, label, icon }) => (
          <button
            key={key}
            className={`tile ${selected === key ? "selected" : ""}`}
            onClick={() => selectOption(key)}
          >
            <img src={`/icons/${icon}`} alt={label} className="tile-icon" />
            <span className="tile-label">{label}</span>
          </button>
        ))}
      </div>

      <div className="nav-buttons">
        <button className="back-button" onClick={onBack}>Back</button>
        <button className="next-button" onClick={onNext}>Next</button>
      </div>

      <div className="progress">Step 5 of 7</div>
    </div>
  );
}
