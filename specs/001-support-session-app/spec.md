# Feature Specification: Customer Support Practice Session App

**Feature Branch**: `001-support-session-app`
**Created**: 2025-12-05
**Status**: Draft
**Input**: User description: "Build an app that allows a user to click on a start button to start practising a customer support session by talking to AWS Nova Sonic model deployed AWS Bedrock. The UI is a conversation style like chatGPT but both users and the model will talk to each other. The conversation can be finished by clicking a button a finish button. The model will play a customer role asked for some support about some products that want to buy or have purchased. The user will play the employee role to support the customer. The user clicks the finish button to end the conversation."

## Clarifications

### Session 2025-12-05
- Q: How should the front-end application securely obtain credentials to interact with AWS Bedrock and Nova Sonic? → A: Call a serverless function to get temporary credentials

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Conduct a Practice Session (Priority: P1)

A user, playing the role of a customer support employee, starts a practice session. They engage in a voice-based conversation with an AI model playing the role of a customer. Once the interaction is complete, the user ends the session.

**Why this priority**: This is the core functionality of the application. Without it, no other feature has value.

**Independent Test**: Can be fully tested by a user starting, speaking during, and ending a session, and verifying that the conversation flow works as expected.

**Acceptance Scenarios**:

1.  **Given** the user is on the main screen, **When** they click the "Start" button, **Then** a new practice session begins and the conversation panel becomes active.
2.  **Given** a session is active, **When** the user speaks, **Then** their words appear in the conversation panel.
3.  **Given** a session is active, **When** the model speaks, **Then** its words appear in the conversation panel.
4.  **Given** a session is active, **When** the user clicks the "Finish" button, **Then** the session ends and the feedback panel is populated.

---

### Edge Cases

- What happens if the user's internet connection drops mid-conversation?
- If the transcription service cannot understand the user's speech, the system will display a message in the conversation panel, such as: "I didn't catch that, please try again."

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST provide a "Start" button to initiate a new customer support practice session.
- **FR-002**: System MUST allow the user to have a voice-based conversation with a customer simulation model.
- **FR-003**: System MUST provide a "Finish" button to end the current practice session.
- **FR-004**: System MUST display the ongoing conversation in a central panel.

### Key Entities

- **Practice Session**: Represents a single, complete interaction between a user and the customer model. It contains the participants and the full conversation transcript.
- **Conversation Turn**: Represents a single utterance from either the user or the model within a session.

## Integration & External Dependencies

- **INT-001**: The system will use the **AWS Nova Sonic** model, via AWS Bedrock, for real-time speech-to-speech conversation.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: A user can successfully start, conduct, and finish a practice session in under 5 minutes (excluding actual conversation time).