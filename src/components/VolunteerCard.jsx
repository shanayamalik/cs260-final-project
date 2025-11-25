// TODO: Create VolunteerCard component for MEDIUM TASK
//
// Props to implement:
// - volunteer: object with volunteer data
//   {
//     id, name, photo, interests[], communicationStyle,
//     location, age, verified, bio, matchScore
//   }
// - onClick: click handler (for viewing details)
// - selected: boolean (highlight if selected for comparison)
// - compact: boolean (smaller version for side-by-side)
//
// Features:
// - Display volunteer photo (or placeholder)
// - Name in large, readable font
// - Verified badge (use verified-badge.svg) if volunteer.verified
// - Show 2-3 top matching interests as badges/chips
// - Communication style indicator
// - Optional match score percentage
// - Large tap target for entire card
//
// Accessibility:
// - ARIA labels for screen readers
// - Clear focus states
// - Alt text for images
//
// Example usage:
// <VolunteerCard 
//   volunteer={volunteerData}
//   onClick={() => viewDetails(volunteer.id)}
//   selected={false}
// />

// export default function VolunteerCard() {
//   return null;
// }
// src/components/VolunteerCard.jsx

// If this path is different in your project, adjust it:
// e.g. "../../public/verified-badge.svg" or "/verified-badge.svg"
// src/components/VolunteerCard.jsx
// ================================
// VolunteerCard Component (MEDIUM TASK)
// ================================
//
// Props:
// - volunteer: object containing volunteer data:
//   {
//     id, name, photo, interests[], communicationStyle,
//     location, age, verified, bio, matchScore, role, profession
//   }
// - onClick: click handler for viewing details
// - selected: boolean — highlights the card when chosen for comparison
// - compact: boolean — renders a smaller version (used in side-by-side view)
//
// Features:
// - Display volunteer photo or placeholder initial
// - Show verified badge (verified-badge.svg) when volunteer.verified is true
// - Display 2–3 top interests as chips
// - Show communication style, age, and role/profession
// - Optional match score percentage
// - Large click/tap target for accessibility
//
// Accessibility:
// - ARIA labels for screen readers
// - Keyboard support (Enter/Space)
// - Alt text for images
//
// Example usage:
// <VolunteerCard
//   volunteer={volunteerData}
//   onClick={() => viewDetails(volunteer.id)}
//   selected={false}
//   compact={false}
// />
//

import React from "react";

// Serving from public/icons (no import needed because Vite handles public folder)
const VERIFIED_BADGE_SRC = "/icons/verified-badge.svg";

export default function VolunteerCard({
  volunteer,
  onClick,
  selected = false,
  compact = false,
}) {
  if (!volunteer) return null;

  const {
    id,
    name,
    photo,
    interests = [],
    communicationStyle,
    location,
    age,
    verified,
    bio,
    matchScore,
    role,
    profession,
  } = volunteer;

  const roleTag = role || profession || location || "Community volunteer";

  // Take the first 2–3 interests
  const topInterests = interests.slice(0, 3);

  // Convert match score (handles 0–1 or 0–100 inputs)
  let matchPercent = null;
  if (typeof matchScore === "number") {
    matchPercent = matchScore <= 1 ? Math.round(matchScore * 100) : Math.round(matchScore);
  }

  const firstName = name?.split(" ")[0] || name || "this volunteer";
  const wantsChat =
    typeof communicationStyle === "string" &&
    communicationStyle.toLowerCase().includes("chat");

  const buttonText = wantsChat
    ? `Chat with ${firstName}`
    : `Request Help from ${firstName}`;

  const cardClasses = [
    "volunteer-card",
    selected && "volunteer-card--selected",
    compact && "volunteer-card--compact",
  ]
    .filter(Boolean)
    .join(" ");

  const handleKeyDown = (e) => {
    if (!onClick) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <article
      className={cardClasses}
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      aria-pressed={selected}
      aria-label={`${name}, ${roleTag}${
        matchPercent != null ? `, ${matchPercent}% match` : ""
      }`}
      style={{
        border: "1px solid #ddd",
        borderRadius: "16px",
        padding: compact ? "12px" : "16px",
        display: "flex",
        gap: "12px",
        cursor: "pointer",
        backgroundColor: "#fff",
        boxShadow: selected ? "0 0 0 3px #1976d2" : "none",
      }}
    >
      {/* Left: Photo */}
      <div
        style={{
          width: compact ? 48 : 64,
          height: compact ? 48 : 64,
          borderRadius: 16,
          overflow: "hidden",
          backgroundColor: "#eee",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: compact ? 20 : 26,
        }}
      >
        {photo ? (
          <img
            src={photo}
            alt={`Photo of ${name}`}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : (
          <span aria-hidden="true">{firstName.charAt(0) || "V"}</span>
        )}
      </div>

      {/* Right side content */}
      <div style={{ flex: 1, minWidth: 0 }}>
        {/* Name + Verified Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            marginBottom: 4,
          }}
        >
          <h3
            style={{
              margin: 0,
              fontSize: compact ? 16 : 18,
              fontWeight: 600,
            }}
          >
            {name}
          </h3>

          {verified && (
            <img
              src={VERIFIED_BADGE_SRC}
              alt="Verified volunteer"
              style={{ width: 20, height: 20 }}
            />
          )}
        </div>

        {/* Tags: Role, Age, Communication style, Match score */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
            fontSize: 12,
            color: "#555",
            marginBottom: 6,
          }}
        >
          <span
            style={{
              padding: "2px 8px",
              borderRadius: 999,
              backgroundColor: "#E3F2FD",
              color: "#1565C0",
              fontWeight: 600,
            }}
          >
            {roleTag}
          </span>

          {age && <span>{age} yrs</span>}

          {communicationStyle && (
            <span style={{ fontStyle: "italic" }}>{communicationStyle}</span>
          )}

          {matchPercent != null && (
            <span style={{ fontWeight: 600 }}>{matchPercent}% match</span>
          )}
        </div>

        {/* Bio — only in non-compact mode */}
        {!compact && bio && (
          <p
            style={{
              margin: "0 0 6px 0",
              fontSize: 13,
              color: "#444",
            }}
          >
            {bio}
          </p>
        )}

        {/* Interests */}
        {topInterests.length > 0 && (
          <div style={{ marginBottom: 8, fontSize: 12 }}>
            <span style={{ color: "#888", marginRight: 4 }}>Can help with:</span>
            {topInterests.map((interest) => (
              <span
                key={interest}
                style={{
                  display: "inline-block",
                  marginRight: 6,
                  marginTop: 4,
                  padding: "2px 8px",
                  borderRadius: 999,
                  backgroundColor: "#F5F5F5",
                  fontSize: 12,
                }}
              >
                {interest}
              </span>
            ))}
          </div>
        )}

        {/* Button */}
        <div style={{ marginTop: 8 }}>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onClick?.();
            }}
            style={{
              width: "100%",
              padding: "8px 12px",
              borderRadius: 999,
              border: "none",
              backgroundColor: "#1976d2",
              color: "#fff",
              fontSize: 14,
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </article>
  );
}