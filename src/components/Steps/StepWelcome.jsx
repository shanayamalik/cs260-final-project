import React from "react";
import "../../styles/StepWelcome.css";

export default function StepWelcome({ onNext }) {
  return (
    <div className="step-container">
      <div className="welcome-icon">
        <div className="icon-circle">
          <span role="img" aria-label="heart" className="heart-icon">💚</span>
        </div>
      </div>

      <h1>Let’s personalize your experience</h1>
      <h2>Answer a few quick questions.</h2>

      <button className="primary-button" onClick={onNext}>Start</button>

      <div className="progress">Step 0 of 7</div>
    </div>
  );
}
