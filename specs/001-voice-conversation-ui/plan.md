# Implementation Plan: Voice Conversation UI

**Branch**: `001-voice-conversation-ui` | **Date**: 2025-12-08 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/001-voice-conversation-ui/spec.md`

## Summary

This feature implements a voice-based conversational interface using AWS Nova Sonic with **real-time bidirectional streaming**. The solution involves creating a Next.js application (using a custom server for WebSocket support) that establishes a WebSocket connection between the browser and the server. The server then proxies audio streams to AWS Bedrock's Nova Sonic model using the `InvokeModelWithBidirectionalStream` API. This allows for low-latency, interruptible, and natural conversations.

## Technical Context

**Language/Version**: TypeScript 5+
**Primary Dependencies**: React 18, Redux Toolkit, Tailwind CSS, Next.js 14+ (Custom Server), @aws-sdk/client-bedrock-runtime, ws (WebSocket library), socket.io (optional, likely native ws for stream proxying)
**Storage**: N/A (Session state in memory/Redux)
**Testing**: Jest + React Testing Library + WebSocket mocking
**Target Platform**: Web (Modern Browsers with Microphone support)
**Project Type**: Web Application (Next.js with Custom Server)
**Performance Goals**: Real-time audio streaming with minimal buffering latency.
**Constraints**: Requires HTTPS. Custom Server prevents Vercel serverless deployment (container deployment required). AWS Credentials from environment.
**Scale/Scope**: Single feature MVP.

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

*   **I. TypeScript First**: Yes
*   **II. React for Components**: Yes
*   **III. Redux for State Management**: Yes
*   **IV. Tailwind CSS for Styling**: Yes
*   **V. Test-First (NON-NEGOTIABLE)**: Yes
*   **VI. Next.js for Development and Builds**: Yes (Using Custom Server pattern `server.ts`)

## Project Structure

### Documentation (this feature)

```text
specs/001-voice-conversation-ui/
├── plan.md              # This file
├── research.md          # Technology choices
├── data-model.md        # Entities
├── quickstart.md        # Run instructions
├── contracts/           # API definitions
└── tasks.md             # Implementation checklist
```

### Source Code

```text
src/
├── app/
│   ├── page.tsx            # Main UI
│   ├── layout.tsx
│   └── globals.css
├── server.ts               # Custom Next.js server (WebSocket handling)
├── components/
│   ├── VoiceInterface.tsx  # Main interaction component (Socket logic)
│   ├── Controls.tsx
│   └── AudioVisualizer.tsx
├── lib/
│   ├── audio-stream.ts     # Audio processing/chunking layer
│   └── bedrock-stream.ts   # AWS Bedrock bidi-stream handler
├── store/
│   ├── store.ts            # Redux store
│   └── conversationSlice.ts
└── types/
    └── index.ts
```

**Structure Decision**: A Next.js app with a Custom Server (`server.ts`) to handle WebSockets alongside Next.js rendering.
