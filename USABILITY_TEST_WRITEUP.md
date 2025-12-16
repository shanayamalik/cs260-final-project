# SilverLink Usability Test Report

**CS 260 Final Project**  
**Team Members:** Shanaya Malik, Minghui Wang, [Teammate 3]  
**Date:** December 15, 2025  
**Application:** SilverLink - Senior Volunteer Connection Platform

---

## Discussion of Test

### Who We Recruited and Why

We recruited three participants to test SilverLink, deliberately selecting individuals with different backgrounds to capture diverse perspectives on usability and accessibility:

**Participant 1: Margaret Chen (tested by Shanaya)**  
A 73-year-old retired elementary school librarian living independently in an assisted living community. Margaret has moderate technical experience - she uses an iPhone, email, and FaceTime regularly but often needs help troubleshooting. She wears bifocals and has mild arthritis affecting fine motor control. We recruited Margaret because she represents our core target demographic: an older adult seeking companionship who could benefit from volunteer connections but may face physical and technical barriers.

**Participant 2: Recent college graduate and app developer (tested by Minghui)**  
A young professional who graduated from UC Berkeley and is currently developing a pet-matching application. This participant actively participates in innovation events and has extensive exposure to modern technical products. While not from our target user group, we included this participant to gain expert perspective on UI/UX design patterns and identify technical issues that may also affect less tech-savvy users.

**Participant 3: Retired senior living alone (tested by Teammate 3)**  
A retired older adult living independently in a residential neighborhood. This participant closely matches our target user group and was selected specifically because they would benefit from volunteer assistance and accessible digital tools. This participant represents seniors who may be socially isolated and could use our platform in real-world scenarios.

---

### Summary of Most Important Critical Incidents

Across all three participants, several critical patterns emerged that significantly impact usability:

#### **1. Voice Recognition Timeout Issues (Severity: Major - Important to Fix)**

**Margaret's experience:** During Question 4 of the voice interview, Margaret paused naturally for 3 seconds while thinking ("I enjoy reading, especially historical fiction, and... [pause] ...oh, and gardening"). The system timed out and moved to the next question before she could finish. She couldn't return to complete her response, leaving her feeling that her profile would be incomplete.

**Impact:** This issue broke Margaret's trust in the voice system - the feature meant to make the app more accessible actually created frustration and anxiety. For older users who need time to formulate thoughts, this is a critical flaw.

#### **2. Accessibility Settings Not Persistent (Severity: Major - Important to Fix)**

**Participant 3's experience:** During sign-up, Participant 3 selected "Large" text size, dark mode, and high-contrast mode. However:
- Text size increases did not apply consistently across subsequent screens
- Dark mode reverted to light mode after selection
- High-contrast mode had no visible effect in dark mode

**Impact:** When accessibility features don't work reliably, users with visual or cognitive impairments lose confidence in the system and may abandon it entirely. This directly contradicts our core mission of accessibility-first design.

#### **3. Navigation and Wayfinding Confusion (Severity: Major - Important to Fix)**

**All participants struggled with navigation:**
- **Margaret:** After completing the voice interview, she stared at the screen for 15 seconds unsure what to do next. The "Continue" button was too subtle. Later, she couldn't find volunteers because the "Matches" tab wasn't intuitive - she expected "Volunteers" or "Find Companions."
- **Participant 2:** Spent considerable time trying to find the scheduling feature, which was placed on the home page instead of where expected (likely near volunteer profiles or in a dedicated scheduling section).
- **Participant 3:** Never discovered the scheduling page at all during testing. Labels like "New Match" and "Unread Message" caused confusion about where to find different features.

**Impact:** If users cannot complete core tasks like finding volunteers or scheduling visits, the application fails its primary purpose.

#### **4. Trust and Safety Concerns (Severity: Major - Important to Fix)**

**Participant 3's experience:** When viewing volunteer profiles, Participant 3 expressed serious uncertainty about whether volunteers were real people. They had strong safety concerns about meeting in person and felt the "verified" badge was insufficient. They expected more volunteer details (background, experience, personal story, multiple photos, references) before feeling comfortable scheduling, especially for in-person meetings.

**Impact:** For vulnerable older adults, trust is paramount. Without sufficient information to establish legitimacy and safety, users will not engage with volunteers, rendering the platform ineffective.

#### **5. Voice Interview UX Issues (Severity: Major - Important to Fix)**

**Multiple problems identified:**
- **Participant 3:** Selected both "voice interview" and "manual" options but found no visible way to type responses, causing confusion. They disliked the robotic AI voice and found it unpleasant.
- **Participant 3:** Had to repeatedly press a button to speak each time, which felt tedious and unnatural. Expected continuous listening or always-available text input.
- **Participant 3:** After the AI said "Thank you for sharing," the participant was unsure what to do next due to lack of clear system feedback or obvious next steps.
- **Margaret:** No loading state on "Start Interview" button caused her to click twice, restarting the interview accidentally.

**Impact:** The voice interview is our flagship feature for accessibility, but current UX friction makes it frustrating rather than helpful.

#### **6. Ambiguous Labels and Missing Feedback (Severity: Minor to Major)**

**Issues across participants:**
- **Margaret:** "Activity" field in scheduling was ambiguous - she wasn't sure if it was asking what she wanted to do or what the volunteer specialized in.
- **Margaret:** No confirmation message after creating a visit left her uncertain if it saved successfully.
- **Participant 3:** Language preferences stated verbally during interview weren't reflected in the profile form. Expected checkboxes instead of free-text field for languages.
- **Participant 2:** Suggested interface is too complex for older users - should be more like WhatsApp/iMessage since those are communication tools seniors already know.

**Impact:** Ambiguous labels require mental effort to interpret. Missing confirmation messages create anxiety about whether actions succeeded.

#### **Positive Findings**

Despite issues, participants appreciated several aspects:
- **Large buttons (44x44px):** Margaret removed her reading glasses and could still interact comfortably. "I love how big these buttons are!"
- **Voice recognition accuracy:** When it worked, speech-to-text was accurate and participants felt "heard."
- **Comparison tool:** Margaret discovered and used the volunteer comparison feature independently, calling it "clever."
- **Clean UI:** Participant 3 liked the clean interface and found text generally easy to read.
- **Organized layout:** Margaret appreciated the tabbed dashboard, saying "This looks organized."
- **Overall task completion:** All participants successfully completed core tasks despite obstacles, indicating the fundamental concept is sound.

---

### Reflections on How We Ran the Study

#### **What Worked Well**

**Consistent methodology across testers:** Each team member followed a similar approach:
1. Explain the overall goal of SilverLink (connecting seniors with volunteers)
2. Demo a simple interaction (e.g., clicking buttons, basic navigation)
3. Present tasks one at a time without explaining how to complete them
4. Observe silently, taking notes on critical incidents
5. Ask follow-up questions after each task

This structured approach helped participants feel comfortable and allowed us to collect clear, task-specific feedback. Participants understood they were evaluating the app, not being evaluated themselves.

**Think-aloud protocol:** Encouraging participants to vocalize their thoughts ("What are you looking for?" "What do you expect to happen?") provided invaluable insight into their mental models and expectations.

**Timestamped logging:** Recording the time of each incident helped us understand task duration and identify which steps took disproportionately long.

**Diverse participant selection:** Testing with both target users (seniors) and expert users (app developer) gave us complementary perspectives - seniors revealed accessibility and trust issues, while the expert identified structural UX patterns that need improvement.

#### **What We Would Change Next Time**

**1. Reduce upfront explanation**  
We provided too much initial guidance about how the system works. This may have influenced participants' behavior and prevented us from observing true first-time-use challenges. Next time, we would give minimal explanation and rely more on post-task questions to understand confusion points.

**2. Longer sessions with more open exploration**  
Testing felt rushed with only 3 prescribed tasks. One tester noted that with more time, participants could discover additional issues. We would allocate 60-75 minutes per session to allow for free exploration after completing structured tasks.

**3. Recruit exclusively from target demographic**  
While the app developer provided useful feedback, our priority should have been recruiting 3 seniors aged 60+. The developer's feedback, while valid, focused on design patterns that may not reflect how actual seniors think and navigate.

**4. Test in realistic environments**  
We tested in quiet, controlled settings. Next time, we would test in participants' homes or community centers with realistic distractions (TV on, phone notifications, etc.) to see how the app performs in real-world conditions.

**5. Include co-discovery protocol**  
Having two seniors work together to complete tasks could reveal how they naturally help each other and what features they find confusing versus intuitive.

**6. Better pre-test screening**  
We should screen participants for specific accessibility needs (vision impairment levels, arthritis severity, hearing loss, etc.) to ensure we test with users who most need our accessibility features.

---

## Discussion of Revisions

Based on our usability testing, we identified the following changes in priority order. These revisions would significantly improve the user experience for our target demographic of older adults.

### High Priority: Must Fix Before Launch

#### **1. Fix Voice Recognition Timeout**

**Problem:** System cuts off users mid-sentence if they pause for 3+ seconds while thinking.

**Solution:** 
- Increase timeout from 3 seconds to 8-10 seconds to accommodate natural speech patterns
- Add visual indicator showing "Still listening..." when user pauses
- Allow users to return to previous questions to add more information
- Provide "I'm done with this answer" button so users explicitly control when to move forward

**Rationale:** This is the most critical issue because it breaks trust in our flagship accessibility feature and makes users feel unheard.

#### **2. Make Accessibility Settings Persistent and Consistent**

**Problem:** Text size, dark mode, and high-contrast settings don't apply consistently across all screens or persist between sessions.

**Solution:**
- Implement global CSS variables that apply to all pages, including login/signup
- Add "Extra Large" text option for severe vision impairment
- Store accessibility preferences in localStorage AND backend so they persist across devices
- Add visual confirmation when accessibility settings change (e.g., "Large text enabled")
- Test all accessibility combinations (dark mode + high contrast + large text) to ensure they work together

**Rationale:** Accessibility is our core value proposition. If these features don't work reliably, we've failed our target users.

#### **3. Improve Navigation and Wayfinding**

**Problem:** Users struggle to find volunteers, scheduling, and understand where they are in the app flow.

**Solution:**
- Rename "Matches" tab to "Volunteers" or "Find Companions" (clearer language)
- Add prominent "View Your Matches" or "Meet Your Volunteers" button after profile completion
- Place "Schedule Visit" button directly on volunteer profile cards, not just in Schedule tab
- Add breadcrumb navigation showing current location (Home > Volunteers > Sarah's Profile)
- Implement guided tour for first-time users highlighting key features
- Use consistent iconography (calendar icon for scheduling, message bubble for chat, etc.)

**Rationale:** If users can't find core features, they can't complete their goals, rendering the app useless.

#### **4. Enhance Trust and Safety Features**

**Problem:** Users don't trust volunteer profiles and have safety concerns about in-person meetings.

**Solution:**
- Expand volunteer profiles to include:
  - Personal introduction video or audio message
  - Multiple photos showing volunteer in different settings
  - Background check status and date
  - Years of volunteer experience and organizations worked with
  - References or testimonials from other seniors
  - Specific training certifications (elder care, CPR, etc.)
- Add "Report Concern" button on every profile
- Implement video call requirement before allowing in-person meetings
- Create community event model: volunteers host group activities at verified locations (community centers, libraries) instead of one-on-one meetings initially
- Add safety tips and guidelines visible during scheduling ("Meet in public places," "Tell someone where you're going," etc.)

**Rationale:** Vulnerable seniors will not engage without strong trust signals. Safety concerns could prevent platform adoption entirely.

#### **5. Redesign Voice Interview UX**

**Problem:** Multiple friction points: robotic voice, repeated button presses, unclear next steps, no text alternative.

**Solution:**
- Implement continuous listening mode (no button press needed, like Siri/Google Assistant)
- Provide always-visible text input option alongside voice (don't make user choose upfront)
- Use more natural-sounding AI voice (upgrade to OpenAI's voice API or ElevenLabs)
- Add clear "What happens next" message at interview end: "Great! Let's review your profile →"
- Show progress bar during AI processing ("Thinking..." "Generating your profile...")
- Auto-populate language preferences from voice interview into checkboxes, not free-text

**Rationale:** The voice interview should feel like a natural conversation, not a frustrating technical task.

### Medium Priority: Important Improvements

#### **6. Add Comprehensive Confirmation and Feedback Messages**

**Problem:** Users unsure if actions succeeded (visit scheduled, profile saved, etc.).

**Solution:**
- Add success toasts: "Visit scheduled with Sarah for Dec 20 at 2pm ✓"
- Show loading spinners on all buttons with async actions
- Provide undo options: "Visit created. [Undo]"
- Add email confirmations for important actions (scheduled visits, new matches)

#### **7. Simplify Interface and Consolidate Features**

**Problem:** Interface too complex for older users compared to familiar apps like WhatsApp.

**Solution:**
- Merge related buttons (combine "View Profile" and "Message" into one volunteer card action)
- Use single dropdown menu for secondary features instead of multiple visible buttons
- Follow WhatsApp/iMessage patterns for messaging UI (familiar metaphors)
- Reduce number of tabs from 5 to 3 (Home, Volunteers, Messages)
- Eliminate rarely-used features or hide them in settings

#### **8. Improve Clickable Areas and Interaction Targets**

**Problem:** Only avatars clickable on volunteer cards, not names or full cards. Difficult for users with arthritis.

**Solution:**
- Make entire volunteer card clickable
- Increase all touch targets to minimum 48x48px (currently 44x44px)
- Add hover states on desktop to show clickable areas
- Ensure 16px minimum spacing between interactive elements

#### **9. Expand Voice Interview Questions**

**Problem:** Insufficient questions to understand users' needs (no age, disabilities, mobility constraints asked).

**Solution:**
- Add questions about:
  - Age range (for appropriate volunteer matching)
  - Physical limitations or disabilities
  - Transportation availability (affects in-person meeting feasibility)
  - Technology comfort level (determines how much UI guidance to provide)
  - Safety concerns or preferences
  - Specific support needs (errands, companionship, learning tech, etc.)

### Low Priority: Nice to Have

#### **10. Full Keyboard Navigation Support**

**Problem:** Users with poor vision need keyboard-only control to avoid looking at screen constantly.

**Solution:**
- Implement full keyboard navigation (Tab, Enter, arrow keys)
- Add skip-to-content links
- Ensure screen reader compatibility (ARIA labels, semantic HTML)
- Test with NVDA/JAWS screen readers

#### **11. Add Persistent Help/Support Button**

**Problem:** Users have no way to get help when stuck.

**Solution:**
- Add floating "Help" button accessible from all screens
- Include FAQs, video tutorials, and live chat support
- Provide phone number for tech support (important for seniors who prefer calling)

---

### Observations from Demo Session

During our class demo session, we received additional feedback that aligns with usability test findings:

1. **Positive reception of voice interface:** Demo attendees were intrigued by voice-first approach and saw its value for accessibility
2. **Confusion about messaging flow:** Multiple observers asked how messaging works and whether it's real-time (answer: currently simulated)
3. **Interest in volunteer verification process:** Questions about how volunteers are vetted and what "verified" badge means
4. **Requests for mobile version:** Several people asked if there's a mobile app, highlighting that seniors often use tablets/phones more than computers

These observations reinforce our test findings: voice features are compelling, but messaging/verification need clarity, and mobile support is essential for target demographic.

---

## Conclusion

Our usability testing revealed that SilverLink's core concept - accessible, voice-first volunteer matching for seniors - is sound and well-received. Participants appreciated large buttons, clean design, and voice interaction when it worked smoothly.

However, critical issues in voice timeout, accessibility consistency, navigation clarity, and trust-building must be addressed before launch. The good news is that all identified problems are fixable with the solutions outlined above.

With the high-priority revisions implemented, SilverLink would be significantly more usable and trustworthy for older adults seeking companionship and volunteer support. Our testing validated the need for this platform while providing a clear roadmap for improvement.

**Overall Recommendation:** Do not launch until voice timeout, accessibility persistence, and navigation issues are resolved. These are not minor polish items - they are fundamental to serving our vulnerable target demographic safely and effectively.
