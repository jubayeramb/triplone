<div align="center">

# 🛫 Triplone

### AI-Powered Tourism Marketing & Management Platform

[![License](https://img.shields.io/badge/license-Proprietary-red.svg)](LICENSE)
[![Node Version](https://img.shields.io/badge/node-%3E%3D20.0.0-brightgreen.svg)](https://nodejs.org)
[![pnpm Version](https://img.shields.io/badge/pnpm-%3E%3D10.18.0-orange.svg)](https://pnpm.io)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue.svg)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-16-black.svg)](https://nextjs.org/)
[![Hono](https://img.shields.io/badge/Hono-3.0+-purple.svg)](https://hono.dev/)
[![Turborepo](https://img.shields.io/badge/Turborepo-monorepo-blueviolet.svg)](https://turbo.build/)
[![Drizzle ORM](https://img.shields.io/badge/Drizzle%20ORM-1.0+-brightgreen.svg)](https://drizzle.team/orm)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v4.0-blue.svg)](https://tailwindcss.com/)
[![shadcn/ui](https://img.shields.io/badge/shadcn.ui-components-green.svg)](https://ui.shadcn.com/)

**Make travel planning smarter, safer, and simpler**

[Features](#-for-travelers) · [For Agencies](#-for-tour-agencies) · [Tech Stack](#-technology-stack) · [Getting Started](#getting-started) · [Documentation](#project-structure)

---

</div>

## 🧭 Overview

**Triplone** is a next-generation, AI-driven travel ecosystem that bridges the gap between travelers and tour agencies through intelligent tour planning, automated marketing, and seamless digital management tools.

Our mission is to empower travelers with personalized experiences while enabling agencies to automate operations and maximize reach.

### Why Triplone?

Triplone isn't just another travel site — it's the **AI operating system for the tourism industry**, bringing together tour discovery, marketing, management, and commerce under one smart ecosystem.

We eliminate the chaos of browsing endless Facebook pages or random websites for tour packages, replacing it with an intelligent, verified, and automated platform.

---

## 👥 For Travelers

Experience travel planning reimagined with AI at your fingertips:

- **🧠 AI-Powered Tour Planning** — Get fully customized travel plans based on your interests, duration, budget, and seasonal factors
- **🎒 Smart Packing Assistant** — Receive AI-generated packing checklists and gear suggestions tailored to destination and weather
- **🏪 Integrated Travel Shop** — Buy all travel essentials (hiking gear, outfits, accessories) directly within the platform with AI-curated recommendations
- **✅ Verified Tour Agencies** — Travel safely knowing all agencies are pre-verified through document and authenticity checks
- **💬 Virtual Tour Assistant (AR/VR)** — Explore destinations interactively and plan your experience before the trip begins
- **💰 Transparent Pricing** — Compare packages, read reviews, and book with confidence

---

## 🏢 For Tour Agencies

Transform how you manage and promote your tours — no more spreadsheets, manual posts, or scattered data:

### Core Management

- **⚙️ AI-Driven Tour Management** — Create, update, and automate tour listings with smart suggestions for pricing, descriptions, and itineraries
- **🧩 Centralized Dashboard** — Manage all customers, bookings, and campaigns in one unified interface
- **📊 Analytics & Insights** — Track performance, customer behavior, and market trends in real-time

### Marketing Automation

- **✍️ Content Engine** — Auto-generate SEO-optimized blogs and promotional content to attract travelers
- **🎬 AI Marketing Studio** — Turn tour descriptions into professional-quality videos with voiceovers, music, and branding
- **🖼️ Smart Banner & Ad Creator** — Generate eye-catching visuals for social media, ads, and websites using AI templates
- **📈 Revenue Maximization Tools** — Optimize pricing and increase profits with data-driven insights

### Growth Tools

- **💳 Credit & Pay-as-you-Go System** — Flexible usage-based billing for premium AI tools
- **🔐 Trust & Verification** — Build credibility with verified badge and automated compliance checks
- **🌐 Multi-Channel Distribution** — Reach customers across web, mobile, and social platforms

---

## 🤖 AI Features at the Core

| Feature                       | Description                                                                       |
| ----------------------------- | --------------------------------------------------------------------------------- |
| 🗺️ **AI Trip Planner**        | Personalized trip builder based on weather, preferences, budget, and availability |
| ✍️ **AI Content Engine**      | Blog, itinerary, and article generation for organic reach and SEO                 |
| 🎬 **AI Video Creator**       | Converts text-based tour data into high-quality marketing videos                  |
| 🖼️ **Smart Banner Generator** | Automatically designs campaign materials and promotional graphics                 |
| 💬 **AI Virtual Assistant**   | 24/7 chatbot for trip guidance and AR-based destination exploration               |
| 🔐 **AI Verification System** | Auto-validates agency documents and credentials for trust & safety                |
| 🎒 **Smart Packing AI**       | Context-aware packing recommendations based on trip details                       |
| 📊 **Predictive Analytics**   | Forecast demand, optimize pricing, and identify market opportunities              |

---

## 💡 The Vision

> "To redefine travel in the digital age — where every journey starts with intelligence and every agency thrives with automation."

---

## 📸 Screenshots

> Coming soon - Dashboard preview, AI trip planner, and marketing studio

---

## 📑 Table of Contents

- [For Travelers](#-for-travelers)
- [For Tour Agencies](#-for-tour-agencies)
- [AI Features](#-ai-features-at-the-core)
- [Use Cases](#-use-cases)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Technology Stack](#-technology-stack)
- [Contributing](#-contributing)

---

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

- **Framework**: Next.js 16 with App Router
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

- **Framework**: Next.js 16 with App Router
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

---

## 🚀 Technology Stack

- **Frontend**: Next.js 16 (App Router), React, Tailwind CSS v4
- **Backend**: Node.js, Express (Hono framework)
- **Database**: PostgreSQL with Drizzle ORM
- **AI/ML**: Integration-ready architecture for AI services
- **Monorepo**: Turborepo + pnpm workspaces
- **Type Safety**: TypeScript across all packages
- **Styling**: shadcn/ui components + Tailwind CSS

---

## 🗺️ Roadmap

- [ ] **Q1 2025**: Core platform launch with basic AI features
- [ ] **Q2 2025**: AI video creator and content engine
- [ ] **Q3 2025**: AR/VR virtual tour assistant
- [ ] **Q4 2025**: Integrated travel shop and mobile apps
- [ ] **2026+**: International expansion and advanced analytics

---

## 📄 License

This project is proprietary software. All rights reserved.

For licensing inquiries, please contact: [your-email@triplone.com]

---

## 🤝 Contributing

This is a private project. If you're part of the team:

1. Fork the repository
2. Create your feature branch (`git checkout -b feat/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feat/amazing-feature`)
5. Open a Pull Request

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and development process.

---

## 📞 Contact & Support

- **Website**: [triplone.com](https://triplone.com) _(coming soon)_
- **Email**: support@triplone.com
- **Documentation**: [docs.triplone.com](https://docs.triplone.com) _(coming soon)_
- **Issues**: [GitHub Issues](https://github.com/jubayeramb/triplone/issues)

---

## 🙏 Acknowledgments

- Built with amazing open-source tools and libraries
- Inspired by the need to modernize the tourism industry
- Special thanks to all contributors and early adopters

---

<div align="center">

**Built with ❤️ for the future of travel**

⭐ Star us on GitHub — it motivates us a lot!

[Website](https://triplone.com) · [X (Twitter)](https://x.com/TriploneHQ)

</div>
