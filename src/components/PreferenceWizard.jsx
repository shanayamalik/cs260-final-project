import React, { useState, useEffect } from "react";
import "../styles/PreferenceWizard.css";
import StepWelcome from "./Steps/StepWelcome";
import StepHelpType from "./Steps/StepHelpType";
import StepAvailability from "./Steps/StepAvailability";
import StepInterests from "./Steps/StepInterests";
import StepReview from "./Steps/StepReview";
import StepLanguage from "./Steps/StepLanguage";
import StepVolunteerStyle from "./Steps/StepVolunteerStyle";
import StepCommunicationMode from "./Steps/StepCommunicationMode";

export default function PreferenceWizard({ initialPreferences, onPreferenceChange }) {
  const [step, setStep] = useState(0);
  const [returnToReview, setReturnToReview] = useState(false);


  const [preferences, setPreferences] = useState(() => {
    const saved = localStorage.getItem("preferences");
    const parsed = saved ? JSON.parse(saved) : initialPreferences || {};
    return {
      helpTypes: parsed.helpTypes || [],
      availability: parsed.availability || { days: [], times: [], anytime: false },
      interests: parsed.interests || [],
      language: parsed.language || [],
      volunteerStyle: parsed.volunteerStyle || "No Preference",
      communicationMode: parsed.communicationMode || []
    };
  });

  // Save to localStorage and notify parent
  useEffect(() => {
    localStorage.setItem("preferences", JSON.stringify(preferences));
    if (onPreferenceChange) onPreferenceChange(preferences);
  }, [preferences, onPreferenceChange]);

  const updatePreferences = (updates) => {
    setPreferences((prev) => ({ ...prev, ...updates }));
  };

  const goToStep = (n) => setStep(n);

  const handleSave = () => {
    // You can replace this with an API call if needed
    alert("Preferences saved!");
  };

  const steps = [
    <StepWelcome onNext={() => goToStep(1)} />,
    <StepHelpType
      selected={preferences.helpTypes}
      onChange={(helpTypes) => updatePreferences({ helpTypes })}
      onNext={() => {
        if (returnToReview) {
          setReturnToReview(false);
          goToStep(7); // jump straight back to review
        } else {
          goToStep(2); // normal flow
        }
      }}
      onBack={() => goToStep(0)}
    />,
    <StepAvailability
      availability={preferences.availability}
      onChange={(availability) => updatePreferences({ availability })}
      onNext={() => {
        if (returnToReview) {
          setReturnToReview(false);
          goToStep(7); // jump straight back to review
        } else {
          goToStep(3); // normal flow
        }
      }}
      onBack={() => goToStep(1)}
    />,
    <StepInterests
      selected={preferences.interests}
      onChange={(interests) => updatePreferences({ interests })}
      onNext={() => {
        if (returnToReview) {
          setReturnToReview(false);
          goToStep(7); // jump straight back to review
        } else {
          goToStep(4); // normal flow
        }
      }}
      onBack={() => goToStep(2)}
    />,
    <StepLanguage
        selected={preferences.language}
        onChange={(language) => updatePreferences({ language })}
        onNext={() => {
            if (returnToReview) {
              setReturnToReview(false);
              goToStep(7); // jump straight back to review
            } else {
              goToStep(5); // normal flow
            }
          }}
        onBack={() => goToStep(3)}
    />,
    <StepVolunteerStyle
        selected={preferences.volunteerStyle}
        onChange={(volunteerStyle) => updatePreferences({ volunteerStyle })}
        onNext={() => {
            if (returnToReview) {
              setReturnToReview(false);
              goToStep(7); // jump straight back to review
            } else {
              goToStep(6); // normal flow
            }
          }}
        onBack={() => goToStep(4)}
    />,
    <StepCommunicationMode
        selected={preferences.communicationMode}
        onChange={(communicationMode) => updatePreferences({ communicationMode })}
        onNext={() => {
            if (returnToReview) {
              setReturnToReview(false);
              goToStep(7); // jump straight back to review
            } else {
              goToStep(7); // normal flow
            }
          }}
        onBack={() => goToStep(5)}
    />,
    <StepReview
      preferences={preferences}
      onEdit={(targetStep) => {
        setReturnToReview(true);
        goToStep(targetStep);
      }}
      onBack={() => goToStep(6)}
      onSave={handleSave}
    />
  ];

  return <div className="wizard-container">{steps[step]}</div>;
}
