<!--
---
Sync Impact Report
---
Version change: 1.1.0 → 1.2.0
Modified principles: None
Added sections: Application Purpose
Removed sections: None
Templates requiring updates: None
Follow-up TODOs: None
-->
# Agent Trainer Constitution

## Application Purpose
This repository is used to build an app that helps new sales employees to practise role-play customer support through the UI by talking with an AI model developed by AWS called AWS Nova Sonic deployed in AWS Bedrock.

## Core Principles

### I. TypeScript First
All new code MUST be written in TypeScript to ensure type safety and improve code quality. JavaScript is only permissible for configuration files or legacy code that is actively being migrated.

### II. React for Components
All UI components MUST be built using React. This ensures a consistent and maintainable component architecture across the application.

### III. Redux for State Management
Application-level state MUST be managed using Redux. This provides a single source of truth and a predictable state container, simplifying debugging and state synchronization. Local component state can be managed with React Hooks where appropriate.

### IV. Tailwind CSS for Styling
All styling MUST be implemented using Tailwind CSS. This utility-first CSS framework ensures a consistent design system and rapid development without writing custom CSS.

### V. Test-First (NON-NEGOTIABLE)
TDD is mandatory: Tests are written, user-approved, and failing before implementation begins. The Red-Green-Refactor cycle is strictly enforced.

### VI. Vite for Development and Builds
The web application MUST be developed and built using Vite. This ensures a fast development experience and optimized production builds.

## Additional Constraints

No additional constraints at this time.

## Development Workflow

Code review is required for all pull requests. All tests must pass before merging.

## Governance

All PRs/reviews must verify compliance with the constitution. Complexity must be justified.

**Version**: 1.2.0 | **Ratified**: 2025-12-04 | **Last Amended**: 2025-12-04