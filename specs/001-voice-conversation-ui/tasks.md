---
description: "Task list for feature 001-voice-conversation-ui"
---

# Tasks: Voice Conversation UI

**Input**: Design documents from `/specs/001-voice-conversation-ui/`
**Prerequisites**: plan.md, spec.md, research.md, data-model.md
**Tests**: Per the constitution's "Test-First" principle, tests are included.

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [x] T001 Create project structure using `npx create-next-app@latest . --typescript --tailwind --eslint`
- [x] T002 Install dependencies (`ws`, `@aws-sdk/client-bedrock-runtime`, `@reduxjs/toolkit`, `react-redux`, `ts-node`) in `package.json`
- [x] T003 [P] Configure `tsconfig.json` and `package.json` scripts to support custom server (`ts-node src/server.ts`)

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

- [ ] T004 [P] Setup Redux store in `src/store/store.ts` and hooks in `src/store/hooks.ts`
- [ ] T005 [P] Create `conversation` slice with initial types in `src/store/conversationSlice.ts`
- [x] T006 Setup custom server scaffolding in `src/server.ts` (basic HTTP/WS setup)
- [ ] T007 Create `src/lib/bedrock-stream.ts` scaffolding (types/interfaces)
- [ ] T008 Create `src/lib/audio-stream.ts` scaffolding (types/interfaces)

**Checkpoint**: Foundation ready - user story implementation can now begin

---

## Phase 3: User Story 1 - Conduct a Voice Conversation (Priority: P1) 🎯 MVP

**Goal**: User can click Start, speak to AWS Nova Sonic, hear response, and End conversation.

**Independent Test**: Launch app, click Start, speak "Hello", verify audio response is heard, click End.

### Tests for User Story 1 ⚠️

> **NOTE: Write these tests FIRST, ensure they FAIL before implementation**

- [ ] T009 [P] [US1] Create unit test for `conversationSlice` reducers in `src/store/__tests__/conversationSlice.test.ts`
- [ ] T010 [P] [US1] Create component test for `VoiceInterface` (start/end button presence) in `src/components/__tests__/VoiceInterface.test.tsx`
- [ ] T011 [P] [US1] Create test for `bedrock-stream` (mock AWS SDK) in `src/lib/__tests__/bedrock-stream.test.ts`

### Implementation for User Story 1

- [ ] T012 [P] [US1] Implement `conversationSlice` logic (setStatus, setSpeaking) in `src/store/conversationSlice.ts`
- [ ] T013 [P] [US1] Create `VoiceInterface` component URL/layout in `src/components/VoiceInterface.tsx`
- [ ] T014 [US1] Create `Controls` component (Start/End buttons) in `src/components/Controls.tsx`
- [ ] T015 [US1] Implement browser audio capture (MediaRecorder) in `src/lib/audio-stream.ts`
- [ ] T016 [US1] Implement AWS Bedrock streaming client in `src/lib/bedrock-stream.ts`
- [ ] T017 [US1] Implement WebSocket handling in `src/server.ts` (connect stream to socket)
- [ ] T018 [US1] Integate WebSocket client logic in `src/components/VoiceInterface.tsx` (send audio, receive audio)
- [ ] T019 [US1] Implement audio playback queue handling in `src/lib/audio-stream.ts` or `VoiceInterface`
- [ ] T020 [US1] Update `src/app/page.tsx` to mount `VoiceInterface`
- [ ] T021 [US1] Implement error handling and UI feedback (connection status) in `src/components/VoiceInterface.tsx`

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently

---

## Phase 4: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [ ] T022 [P] Create `AudioVisualizer` component in `src/components/AudioVisualizer.tsx`
- [ ] T023 Integrate `AudioVisualizer` into `VoiceInterface`
- [ ] T024 Perform audio latency optimization (adjust chunk sizes if needed) in `src/lib/audio-stream.ts`
- [ ] T025 Verify clean resource disposal (Stop MediaStream, Close Socket) on unmount

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies
- **Foundational (Phase 2)**: Depends on Setup
- **User Story 1 (Phase 3)**: Depends on Foundational

### Parallel Opportunities

- T004, T005, T007, T008 (Foundational) are largely independent files
- T013, T014 (Frontend Components) can run parallel to T015, T016 (Logic/Backend)

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Setup & Foundation
2. Implement T009-T021 (US1)
3. Validate "Start -> Speak -> Hear -> End" flow
4. Apply Polish (Visualizer)
