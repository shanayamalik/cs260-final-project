// TODO: Create HelpTypeTiles component for EASY TASK
//
// Props to implement:
// - onSelect: callback function when a tile is selected
// - selectedType: currently selected help type (for highlighting)
//
// Features:
// - Display 3 large, accessible tiles:
//   1. Conversation (use conversation.svg icon)
//   2. Hobby Buddy (use hobby.svg icon)
//   3. Tech Help (use tech-help.svg icon)
// - Each tile should be large (min 150x150px)
// - Clear visual feedback when selected
// - Tap-friendly spacing between tiles
// - Icons should be large and colorful
//
// State management:
// x Save selected type to localStorage when clicked
// x Pass selection to parent component
//
// Example usage:
// <HelpTypeTiles 
//   onSelect={(type) => setHelpType(type)} 
//   selectedType={helpType}
// />
import {useEffect} from 'react';
import "../styles/HelperTypeTiles.css"

const OPTIONS = [
  "Someone to Talk To",
  "Hobby Buddy",
  "Tech Help"
];

export default function HelpTypeTiles({onSelect, selectedType}) {
  const toggle = (option) => {
    const newSelected = selected.includes(option)
      ? selected.filter((o) => o !== option)
      : [...selected, option];
    onChange(newSelected);
  };

  return (
    <div className="step-container">
      <h1>What do you need help with?</h1>
      <div className="tiles-row">
        {OPTIONS.map((opt) => (
          <button
            key={opt}
            className={`tile ${selected.includes(opt) ? "selected" : ""}`}
            onClick={() => toggle(opt)}
          >
            <span className="tile-label">{opt}</span>
          </button>
        ))}
      </div>
      <div className="nav-buttons">
        <button className="back-button" onClick={onBack}>Back</button>
        <button className="next-button" onClick={onNext}>Next</button>
      </div>
      <div className="progress">Step 1 of 4</div>
    </div>
  );
}
