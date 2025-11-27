import React from "react";
import  "../../styles/StepHelperType.css";

const HELP_OPTIONS = [
  { key: "Someone to Talk To", label: "Someone to Talk To", iconUrl: "../icons/conversation.svg"},
  { key: "Hobby Buddy", label: "Hobby Buddy", iconUrl: "../icons/hobby.svg" },
  { key: "Tech Help", label: "Tech Help", iconUrl: "../icons/tech-help.svg" }
];

export default function StepHelpType({ selected, onChange, onNext, onBack }) {
  const toggleOption = (key) => {
    const updated = selected.includes(key)
      ? selected.filter((item) => item !== key)
      : [...selected, key];
    onChange(updated);
  };

  return (
    <div className="step-container">
      <h1>What do you need help with?</h1>

      <div className="tiles-row">
        {HELP_OPTIONS.map(({ key, label, iconUrl }) => (
          <button
            key={key}
            className={`tile ${selected.includes(key) ? "selected" : ""}`}
            onClick={() => toggleOption(key)}
          >
            <img src={iconUrl} alt={label} className="tile-icon" />
            <span className="tile-label">{label}</span>
          </button>
        ))}
      </div>

      <div className="nav-buttons">
        <button className="back-button" onClick={onBack}>Back</button>
        <button className="next-button" onClick={onNext}>Next</button>
      </div>

      <div className="progress">Step 1 of 7</div>
    </div>
  );
}
