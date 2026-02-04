# Whiteboard Notes (MVP)

Minimal MVP aplikacji typu whiteboard z karteczkami (sticky notes).
Każdy użytkownik widzi wyłącznie swoje dane, a stan tablicy jest zapisywany w bazie danych.

## Tech Stack
- Frontend: React + TypeScript + TailwindCSS
- Backend: Node.js (NestJS)
- Database: PostgreSQL
- ORM: Prisma
- Package manager: pnpm
- Monorepo: pnpm workspaces

## Requirements
- Node.js (LTS)
- pnpm
- Docker (PostgreSQL — Day 2+)

## Setup

Install dependencies:
```bash
pnpm install
```

## Run apps

### API
```bash
pnpm --filter api start:dev
```

### Web
```bash
pnpm --filter web dev
```

## Formatting

Format code:
```bash
pnpm format
```

Check formatting:
```bash
pnpm format:check
```

## Notes
- Environment variables are required for API and database connection (see `.env.example` files).
- PostgreSQL can be run locally via Docker when database layer is introduced.

