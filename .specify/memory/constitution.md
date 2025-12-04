<!--
---
Sync Impact Report
---
Version change: none → 1.0.0
Modified principles:
- [PRINCIPLE_1_NAME] → I. TypeScript First
- [PRINCIPLE_2_NAME] → II. React for Components
- [PRINCIPLE_3_NAME] → III. Redux for State Management
- [PRINCIPLE_4_NAME] → IV. Tailwind CSS for Styling
- [PRINCIPLE_5_NAME] → V. Test-First (NON-NEGOTIABLE)
Added sections: None
Removed sections: None
Templates requiring updates:
- .specify/templates/plan-template.md (⚠ pending)
- .specify/templates/spec-template.md (⚠ pending)
- .specify/templates/tasks-template.md (⚠ pending)
Follow-up TODOs: None
-->
# Agent Trainer Constitution

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

## Additional Constraints

No additional constraints at this time.

## Development Workflow

Code review is required for all pull requests. All tests must pass before merging.

## Governance

All PRs/reviews must verify compliance with the constitution. Complexity must be justified.

**Version**: 1.0.0 | **Ratified**: 2025-12-04 | **Last Amended**: 2025-12-04