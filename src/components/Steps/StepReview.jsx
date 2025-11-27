import React from "react";
import "../../styles/StepReview.css";

export default function StepReview({ preferences, onEdit, onBack, onSave }) {
  const { helpTypes, availability, interests } = preferences;

  const formatAvailability = () => {
    if (availability.anytime) return "Anytime works";
    const days = availability.days.length ? availability.days.join(", ") : "No days selected";
    const times = availability.times.length ? availability.times.join(", ") : "No times selected";
    return `${days} / ${times}`;
  };

  return (
    <div className="step-container">
      <h1>Review Your Preferences</h1>

      <div className="summary">
        <div className="summary-section">
          <h2>🧑‍🤝‍🧑 Help Type</h2>
          <p>{helpTypes.length ? helpTypes.join(", ") : "None selected"}</p>
          <button className="edit-link" onClick={() => onEdit(1)}>Edit</button>
        </div>

        <div className="summary-section">
          <h2>📅 Availability</h2>
          <p>{formatAvailability()}</p>
          <button className="edit-link" onClick={() => onEdit(2)}>Edit</button>
        </div>

        <div className="summary-section">
          <h2>🎨 Interests</h2>
          <p>{interests.length ? interests.join(", ") : "None selected"}</p>
          <button className="edit-link" onClick={() => onEdit(3)}>Edit</button>
        </div>

        <div className="summary-section">
          <h2>🗣️ Language Preference</h2>
          <p>{preferences.language.length ? preferences.language.join(", ") : "None selected"}</p>
          <button className="edit-link" onClick={() => onEdit(4)}>Edit</button>
        </div>

        <div className="summary-section">
          <h2>🧍 Communication Style</h2>
          <p>{preferences.volunteerStyle}</p>
          <button className="edit-link" onClick={() => onEdit(5)}>Edit</button>
        </div>

        <div className="summary-section">
          <h2>📞 Communication Mode</h2>
          <p>{preferences.communicationMode.length ? preferences.communicationMode.join(", ") : "None selected"}</p>
          <button className="edit-link" onClick={() => onEdit(6)}>Edit</button>
        </div>
      </div>


      <div className="nav-buttons">
        <button className="back-button" onClick={onBack}>Back</button>
        <button className="save-button" onClick={onSave}>Save Preferences</button>
      </div>

      <div className="progress">Step 7 of 7</div>
    </div>
  );
}
