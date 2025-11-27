import React from "react";
import "../../styles/StepInterests.css";

const INTEREST_OPTIONS = [
  "🌻 Gardening",
  "🧳 Travel",
  "🎸 Music",
  "🍳 Cooking",
  "🎬 Movies",
  "🎲 Games",
  "💻 Technology",
  "📚 Reading",
  "🎨 Art",
  "🏅 Sports",
  "🧩 Others"
];

export default function StepInterests({ selected, onChange, onNext, onBack }) {
  const toggleInterest = (interest) => {
    const updated = selected.includes(interest)
      ? selected.filter((i) => i !== interest)
      : [...selected, interest];
    onChange(updated);
  };

  return (
    <div className="step-container">
      <h1>What topics do you enjoy?</h1>

      <div className="chips-row">
        {INTEREST_OPTIONS.map((interest) => (
          <button
            key={interest}
            className={`chip ${selected.includes(interest) ? "selected" : ""}`}
            onClick={() => toggleInterest(interest)}
          >
            {interest}
          </button>
        ))}
      </div>

      <div className="nav-buttons">
        <button className="back-button" onClick={onBack}>Back</button>
        <button className="next-button" onClick={onNext}>Next</button>
      </div>

      <div className="progress">Step 3 of 7</div>
    </div>
  );
}
