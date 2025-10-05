# Triplone

> Your all-in-one solution for managing and sharing trip plans with friends and family.

## Project Structure

This is a **monorepo** managed with [Turborepo](https://turbo.build/repo) and [pnpm workspaces](https://pnpm.io/workspaces). The project is organized into three main directories:

```
triplone/
├── apps/           # Application projects
├── packages/       # Shared packages and libraries
└── tooling/        # Development tools and configurations
```

## Apps

Applications are located in the `apps/` directory. Each app is a standalone Next.js application.

### `/apps/web`

The main customer-facing web application.

- **Framework**: Next.js 15 with App Router
- **Port**: 3000 (default)
- **Features**:
  - Customer dashboard
  - Bookings management
  - Payment methods
  - User profile
  - Saved tours
  - Settings

**Run**: `pnpm dev:web`

### `/apps/dashboard`

Admin/internal dashboard application.

- **Framework**: Next.js 15 with App Router
- **Port**: 4000
- **Features**: TBD

**Run**: `pnpm dev:dash`

### `/apps/api`

Backend API server.

- **Status**: In development
- **Purpose**: Backend services and API endpoints

## Packages

Shared packages are located in the `packages/` directory. These are internal packages used across multiple apps.

### `/packages/ui`

Shared UI components library built with shadcn/ui.

- **Components**: Button, Card, Input, Dialog, Sidebar, Avatar, Badge, and more
- **Styling**: Tailwind CSS v4
- **Usage**: Imported as `@triplone/ui` in apps

### `/packages/db`

Database layer using Drizzle ORM and PostgreSQL.

- **Status**: In development
- **Purpose**: Shared database schema and access layer

### `/packages/auth`

Authentication and authorization logic.

- **Purpose**: Shared auth utilities and providers

### `/packages/api-client`

API client for consuming backend services.

- **Purpose**: Type-safe API client for frontend apps

### `/packages/validators`

Shared validation schemas and utilities.

- **Purpose**: Consistent data validation across frontend and backend

## Tooling

Development tools and shared configurations are in the `tooling/` directory.

### `/tooling/eslint-config`

Shared ESLint configurations.

- **Exports**:
  - `@triplone/eslint-config/base` - Base config
  - `@triplone/eslint-config/next-js` - Next.js specific rules
  - `@triplone/eslint-config/react-internal` - React library rules

### `/tooling/tailwind-config`

Shared Tailwind CSS configuration.

- **Version**: Tailwind CSS v4
- **Usage**: Extended by apps for consistent styling

### `/tooling/typescript-config`

Shared TypeScript configurations.

- **Exports**:
  - `base.json` - Base TypeScript config
  - `nextjs.json` - Next.js specific config
  - `react-library.json` - React library config

## Getting Started

### Prerequisites

- **Node.js**: >= 20.0.0
- **pnpm**: >= 10.18.0

### Installation

```bash
# Install dependencies
pnpm install

# Run all apps in development mode
pnpm dev

# Run specific app
pnpm dev:web      # Customer web app
pnpm dev:dash     # Dashboard app
```

### Development

```bash
# Start development servers
pnpm dev

# Build all apps
pnpm build

# Lint all packages
pnpm lint

# Type-check all packages
pnpm type-check

# Format all files
pnpm format

# Check formatting (useful for CI)
pnpm format:check
```

## Code Style

This project enforces consistent code formatting using:

- **EditorConfig**: Basic editor settings
- **Prettier**: Code formatting
- **ESLint**: Code quality and linting

See [FORMATTING.md](./FORMATTING.md) for detailed information.

### Quick Setup

1. Install dependencies: `pnpm install`
2. Install recommended VS Code extensions (you'll be prompted)
3. Files will auto-format on save ✨

## Adding New Packages

To add a new shared package:

1. Create a directory in `packages/`
2. Add `package.json` with name `@triplone/<package-name>`
3. Update the workspace configuration if needed
4. Run `pnpm install` to link the workspace

## Scripts Reference

| Script            | Description                                   |
| ----------------- | --------------------------------------------- |
| `pnpm dev`        | Start all apps in development mode            |
| `pnpm dev:web`    | Start web app only                            |
| `pnpm dev:dash`   | Start dashboard app only                      |
| `pnpm build`      | Build all apps for production                 |
| `pnpm lint`       | Lint all packages                             |
| `pnpm type-check` | Type-check all packages                       |
| `pnpm format`     | Format all files with Prettier                |
| `pnpm db:*`       | Database operations (generate, migrate, etc.) |
