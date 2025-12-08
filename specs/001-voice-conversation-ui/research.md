# Phase 0: Research

## 1. Technical Unknowns

### FR-009: Transcript Display?
- **Decision**: No.
- **Rationale**: The spec prioritizes a "simple UI" and "voice conversation". Adding a transcript introduces complexity (syncing text with audio, additional UI state). We will focus on high-quality audio interaction first.
- **Alternatives**: We could enable transcript logging in the console for debugging.

## 2. Technology Choices

### AWS Nova Sonic Integration
- **Context**: AWS Nova Sonic `amazon.nova-sonic-v1:0` supports `InvokeModelWithBidirectionalStream` (HTTP/2).
- **Strategy**:
    - **Frontend**: Use `MediaRecorder` API to capture audio.
    - **Protocol**: 
        - **Option A (Simpler, Robust)**: Turn-based "Walkie-Talkie". User speaks -> Silence/Stop -> Send Audio -> Receive Audio -> Play.
        - **Option B (Streaming)**: WebSocket/bidi-stream.
        - **Decision**: **Option B (Streaming)**.
        - **Rationale**: User explicitly requested the streaming option to enable a more natural, real-time conversational experience, despite the added complexity of managing WebSocket connections in Next.js.
    - **Backend**: Custom Next.js Server (`server.ts`) or separate WebSocket handler to proxy to AWS Bedrock.
    - **SDK**: `@aws-sdk/client-bedrock-runtime`.

### Audio Handling (Frontend)
- **Capture**: `navigator.mediaDevices.getUserMedia` + `MediaRecorder`.
- **Format**: WebM/Opus (Browser standard). Nova Sonic supports various formats, need to ensure transcoding if necessary or standard support.
- **Playback**: HTML5 `Audio` element or Web Audio API.

### Authentication
- **Requirement**: "get aws credentials from the current environment".
- **Implementation**: Standard `process.env.AWS_ACCESS_KEY_ID`, etc., used automatically by AWS SDK in the Node.js backend.

## 3. Project Structure
- **Decision**: Create a new Next.js application (`create-next-app`).
- **Rationale**: User request implies "Build the app". Current directory is empty of source.
- **Stack**: Next.js (App Router), TypeScript, Tailwind CSS, Redux Toolkit (as per Constitution).
