# Triplone Codebase Audit

> **Date:** Feb 19, 2026 (updated after PR #7/#8/#9 review)  
> **Scope:** Full monorepo scan — all apps, packages, and tooling  
> **Purpose:** Pre-implementation review — understand what exists, what works, what needs fixing before next feature cycle

---

## Table of Contents

1. [Monorepo Overview](#1-monorepo-overview)
2. [apps/api — Hono.js Backend](#2-appsapi--honojs-backend)
3. [apps/web — Customer Web App](#3-appsweb--customer-web-app)
4. [apps/dashboard — Admin Dashboard](#4-appsdashboard--admin-dashboard)
5. [packages/db — Database Layer](#5-packagesdb--database-layer)
6. [packages/auth — Authentication](#6-packagesauth--authentication)
7. [packages/ui — Component Library](#7-packagesui--component-library)
8. [tooling/env — Environment Config](#8-toolingenv--environment-config)
9. [Tooling (ESLint / TypeScript / Tailwind)](#9-tooling-eslint--typescript--tailwind)
10. [Critical Issues](#10-critical-issues)
11. [Improvements Before Next Implementation](#11-improvements-before-next-implementation)
12. [What's Ready vs What Isn't](#12-whats-ready-vs-what-isnt)

---

## 1. Monorepo Overview

**Type:** Turborepo + pnpm workspaces  
**Package Manager:** pnpm 10.18.0  
**Node:** ≥ 20.0.0

```
triplone/
├── apps/
│   ├── api/          → Hono.js REST API (port 5000)
│   ├── web/          → Next.js customer-facing app (port 3000)
│   └── dashboard/    → Next.js admin dashboard (port 4000)
├── packages/
│   ├── auth/         → Better-Auth configuration
│   ├── db/           → Drizzle ORM + PostgreSQL schemas
│   └── ui/           → shadcn/ui component library
└── tooling/
    ├── env/          → Zod-based env validation (exported as @triplone/env)
    ├── eslint-config/
    ├── tailwind-config/
    └── typescript-config/
```

**Root Scripts:**

| Script            | Command             |
| ----------------- | ------------------- |
| `pnpm dev`        | Start all apps      |
| `pnpm dev:web`    | Customer web only   |
| `pnpm dev:dash`   | Dashboard only      |
| `pnpm dev:api`    | API only            |
| `pnpm build`      | Build everything    |
| `pnpm db:gen`     | Generate migrations |
| `pnpm db:migrate` | Run migrations      |
| `pnpm db:push`    | Push schema to DB   |
| `pnpm db:studio`  | Drizzle Studio      |

**Tech Stack:**

| Layer      | Technology                                                  |
| ---------- | ----------------------------------------------------------- |
| Frontend   | Next.js 16, React 19, Tailwind CSS v4                       |
| Backend    | Hono.js v4, @hono/zod-openapi, stoker                       |
| Database   | PostgreSQL, Drizzle ORM v0.44, drizzle-zod                  |
| Auth       | Better-Auth v1.3 (email/password + Google OAuth)            |
| Validation | Zod v4.1 (except packages/ui uses v3.25 — see issues)       |
| Build      | Turborepo v2.7, Turbopack, tsup                             |
| UI         | shadcn/ui, Radix UI, lucide-react, class-variance-authority |
| Env        | Custom Zod validator (tooling/env → @triplone/env)          |

---

## 2. apps/api — Hono.js Backend

### What Exists

**Entry & App:**

```
src/
├── index.ts              → Server startup, DB init, port binding
├── app.ts                → App factory, middleware, route registration
├── lib/
│   ├── create-app.ts     → OpenAPIHono factory with defaultHook
│   ├── configure-openapi.ts → /doc (JSON spec) + /reference (Swagger UI)
│   └── constants.ts      → Zod error messages, notFoundSchema, uuidParamsSchema
└── routes/
    ├── index.route.ts    → ⚠️ Duplicate POST /users with inline handler
    └── users/
        ├── index.ts      → Route aggregator (handlers are EMPTY)
        └── routes.ts     → Route definitions (getAll, create, getById)
```

**Implemented Routes:**

| Method | Path          | Status                    |
| ------ | ------------- | ------------------------- |
| GET    | `/users`      | ⚠️ Defined, handler empty |
| POST   | `/users`      | ⚠️ Defined, handler empty |
| GET    | `/users/{id}` | ⚠️ Defined, handler empty |
| GET    | `/doc`        | ✅ OpenAPI JSON spec      |
| GET    | `/reference`  | ✅ Swagger UI             |

**Architecture Patterns:**

- Separates route _definitions_ (routes.ts) from route _registration_ (index.ts) — good pattern
- Uses `stoker` for HTTP status codes, error schemas, `jsonContent`/`jsonContentRequired` helpers
- Validation via `@hono/zod-openapi` with `defaultHook` for automatic Zod error formatting
- `app.notFound()` + `app.onError()` from stoker for global error handling
- DB client initialized as singleton at startup in `index.ts`

**Docker:** Multi-stage build (deps → build → prod, node:20-alpine). Exposes port 5000.

**Build:** tsup → ESM, minified, tree-shaken, Node 18+ target.

### What's Missing / Broken

- **Empty handlers** — Every route returns nothing. Routes are schema-defined but `() => {}`.
- **Duplicate route** — `index.route.ts` has a second `POST /users` that conflicts with `users/index.ts`. This file appears to be a leftover example.
- **No auth middleware** — `@triplone/auth` is not integrated. All endpoints are public.
- **No DB queries** — Handlers don't call `getDbClient()`. No actual data persistence.
- **No CORS** — Browsers can't call this API. Blocks all frontend integration.
- **No pagination** — `GET /users` would return the full table.
- **No API versioning** — `API_VERSION` env var is declared but never used in route paths.
- **No health check** — No `/health` or `/status` endpoint.
- **No rate limiting** — No protection against abuse.

---

## 3. apps/web — Customer Web App

### What Exists

**Framework:** Next.js 16, App Router, React 19, Tailwind v4, Turbopack  
**Total:** ~72 TypeScript files, ~4,860 lines

**Route Structure:**

```
app/
├── layout.tsx                → Root layout (Poppins font, metadata)
├── globals.css               → Tailwind imports
├── (main)/                   → Public marketing pages
│   ├── layout.tsx            → Navbar + Footer wrapper
│   ├── page.tsx              → Homepage
│   ├── data/homepage.ts      → Static homepage data (stats, features, destinations, testimonials)
│   ├── components/
│   │   ├── navbar.tsx
│   │   ├── footer.tsx
│   │   └── homepage/         → 8 homepage section components
│   └── blog/
│       ├── page.tsx          → Blog listing
│       ├── lib.ts            → Mock blog posts + categories
│       ├── components/       → featured-post, top-reads, blog-card, category-filter, cta
│       └── [slug]/
│           ├── page.tsx      → Individual blog post
│           ├── lib.ts        → Mock article content + TOC
│           └── components/   → blog-post-header, table-of-contents, blog-content, related-articles
└── (customer)/               → Protected customer dashboard
    ├── layout.tsx            → Sidebar + SidebarProvider wrapper
    ├── sidebar/              → app-sidebar, nav-main, nav-user, dynamic-breadcrumb, team-switcher
    ├── bookings/             → Page + 3 components (booking-card, bookings-list, booking-summary)
    ├── profile/              → Page + 4 components (personal-info, travel-preferences, activity-history)
    ├── saved/                → Page + 3 components (tour-card, tours-grid, tour-card-actions)
    ├── payment/              → Page + 4 components (payment-method-card, payment-methods-list, security-info)
    └── settings/             → Page + 5 components (account-security, notifications, privacy, preferences, account-actions)
```

**Pages Implemented:**

| Route                | Description                                           | Data                         |
| -------------------- | ----------------------------------------------------- | ---------------------------- |
| `/`                  | Homepage (hero, destinations, features, testimonials) | Static mock                  |
| `/blog`              | Blog listing with categories                          | Mock (6 posts, 8 categories) |
| `/blog/[slug]`       | Individual blog post with TOC                         | Mock                         |
| `/customer/bookings` | My bookings list + summary stats                      | Mock (4 bookings)            |
| `/customer/profile`  | Personal info, travel preferences, activity history   | Mock                         |
| `/customer/saved`    | Saved tours wishlist                                  | Mock (5 tours)               |
| `/customer/payment`  | Payment methods management                            | Mock (Visa, bKash, Nagad)    |
| `/customer/settings` | Notifications, privacy, preferences, account          | Mock                         |

**Pages Not Implemented (linked in navbar):**

- `/login`, `/about`, `/tour`, `/package`, `/contact`, `/book`

### Data Pattern

Every section has a `lib.ts` file with a comment at the top:

```typescript
// Mock data - replace with actual data fetching
```

All data is hardcoded TypeScript objects/arrays. No API calls, no server actions, no `fetch()`.

### What's Missing / Broken

**CRITICAL:**

- ~~**Duplicate route directories**~~ ✅ **RESOLVED** — `app/customer/` was deleted (commit `b363d14`). Only `app/(customer)/` remains.
- **No authentication** — All pages are publicly accessible. No middleware, no session check.
- **No API integration** — 100% mock data. Nothing connects to `apps/api`.

**HIGH:**

- No login/signup pages
- No middleware.ts for route protection
- No error boundaries
- No loading states / skeleton screens
- Form UIs exist (settings, profile) but no submission logic
- Navbar links to pages that don't exist

**MEDIUM:**

- No state management (no Zustand, Context, etc.)
- No form validation (Zod) on client
- No SEO meta tags on inner pages
- No pagination (blog, saved tours)
- No search functionality

---

## 4. apps/dashboard — Admin Dashboard

### What Exists

**Framework:** Next.js 16, App Router, React 19, Tailwind v4, Turbopack  
**Total:** ~16 TypeScript files, ~4,500 lines  
**Dependencies:** `@triplone/ui`, `next`, `react`, `react-dom`, `lucide-react`

**Route Structure:**

```
app/
├── layout.tsx               → Root layout (Geist font) + SidebarProvider wrapper
├── page.tsx                 → Agency overview: stats cards, recent bookings, revenue chart, popular tours
├── sidebar/
│   ├── app-sidebar.tsx      → Main sidebar: nav sections, user menu, team switcher
│   ├── dynamic-breadcrumb.tsx → Auto breadcrumbs from route path
│   ├── nav-main.tsx         → Collapsible nav groups (Dashboard, Tours, Customers, etc.)
│   ├── nav-projects.tsx     → Agency quick-links section
│   ├── nav-user.tsx         → User dropdown (profile, billing, notifications, logout)
│   └── team-switcher.tsx    → Agency switcher dropdown
├── analytics/page.tsx       → Revenue analytics: overview cards, revenue chart, booking trends, tour performance table
├── customers/
│   ├── page.tsx             → Customer list with search, status filter, stats cards, table
│   └── [id]/
│       ├── page.tsx         → Customer profile: info card, stats, recent bookings, activity
│       ├── bookings/page.tsx → Customer booking history with stats & table
│       └── message/page.tsx  → Customer messaging interface with chat UI
├── payments/page.tsx        → Payment transactions: stats cards, filterable transaction table
├── settings/page.tsx        → 4-tab settings: General, Notifications, Security, Billing
└── tours/
    └── create/page.tsx      → Tour creation form: basic info, itinerary, pricing, images
```

**Pages Implemented:**

| Route                      | Description                                    | Data      |
| -------------------------- | ---------------------------------------------- | --------- |
| `/`                        | Agency overview with stats, bookings, revenue  | Mock      |
| `/analytics`               | Revenue, booking trends, tour performance      | Mock      |
| `/customers`               | Customer list with search & filter             | Mock      |
| `/customers/[id]`          | Customer profile with stats & activity         | Mock      |
| `/customers/[id]/bookings` | Customer's booking history                     | Mock      |
| `/customers/[id]/message`  | Chat/messaging interface                       | Mock      |
| `/payments`                | Payment transaction list with stats            | Mock      |
| `/settings`                | General, Notifications, Security, Billing tabs | Mock      |
| `/tours/create`            | Tour creation multi-section form               | Static UI |

**Architecture Patterns:**

- Sidebar layout with `SidebarProvider` + `SidebarInset` (same pattern as `apps/web` customer dashboard)
- Collapsible nav groups with sub-items
- Dynamic breadcrumbs generated from URL path segments
- Consistent card-based layout for stats and data display
- All data is hardcoded mock — same `// Mock data` pattern as `apps/web`

### What's Missing

- **No authentication** — All pages are publicly accessible. No role-based access (agency_owner, agency_staff, moderator, super_admin).
- **No API integration** — 100% mock data. Nothing connects to `apps/api`.
- **No tour list/edit pages** — Only tour creation exists. No tour listing, detail view, or edit functionality.
- **No booking management** — Bookings appear in stats/tables but there's no dedicated booking management page.
- **No agency management** — No agency profile, verification status, or agency settings.
- **No form submission logic** — Tour creation and settings forms render but don't submit anywhere.
- **No real-time features** — Messaging page is a static UI, no WebSocket or real-time chat.

---

## 5. packages/db — Database Layer

### What Exists

**Client pattern:** Singleton `DbClient` class with lazy initialization.

```typescript
createDbClientSingleton(connectionString); // call once at startup
getDbClient(); // call anywhere after
closeDbClient(); // graceful shutdown
```

**Schema defined:**

```
src/schema/
├── enums.ts   → roleEnum
└── users.ts   → users table + Zod schemas
```

**Users Table:**

| Column                 | Type         | Notes                                                           |
| ---------------------- | ------------ | --------------------------------------------------------------- |
| `id`                   | UUID         | PK, auto-generated                                              |
| `email`                | varchar(256) | unique, indexed                                                 |
| `phone`                | varchar(256) | optional                                                        |
| `password`             | varchar(256) | hashed                                                          |
| `role`                 | enum         | user, guest, moderator, super_admin, agency_owner, agency_staff |
| `has_verified_email`   | boolean      | default false                                                   |
| `email_token`          | text         | for email verification                                          |
| `refresh_token`        | text         | for session management                                          |
| `reset_password_token` | text         | for password reset                                              |
| `deleted`              | boolean      | soft delete flag                                                |
| `banned`               | boolean      | moderation flag                                                 |
| `created_at`           | timestamp    | auto                                                            |
| `updated_at`           | timestamp    | —                                                               |
| `deleted_at`           | timestamp    | soft delete timestamp                                           |

**Auto-generated Zod schemas** (from drizzle-zod):

- `userSelectSchema` — full user object
- `userInsertSchema` — create (omits system fields + timestamps)
- `serUpdateSchema` — update (omits id only) ⚠️ typo in name: `serUpdateSchema` should be `userUpdateSchema`

**Reusable helper:** `timestamps.schema` + `timestamps.omit` — DRY pattern for created/updated/deleted timestamps.

**Drizzle config:** points to `./src/schema`, outputs migrations to `./src/migrations`. No DATABASE_URL configured in config — relies on environment (correct behavior).

### What's Missing

**Tables not yet defined (based on platform requirements):**

| Table                  | Purpose                                                       |
| ---------------------- | ------------------------------------------------------------- |
| `agencies`             | Tour agency profiles                                          |
| `agency_verifications` | Verification documents + status                               |
| `tours`                | Tour packages (title, description, price, duration, capacity) |
| `tour_images`          | Multiple images per tour                                      |
| `tour_itineraries`     | Day-by-day itinerary items                                    |
| `destinations`         | Reusable destination entities                                 |
| `bookings`             | Customer tour bookings                                        |
| `booking_participants` | People per booking                                            |
| `payments`             | Payment transactions                                          |
| `reviews`              | Customer reviews + ratings                                    |
| `saved_tours`          | Wishlisted tours per user                                     |
| `blog_posts`           | CMS blog posts                                                |
| `categories`           | Tour/blog categories                                          |
| `notifications`        | User notifications                                            |
| `sessions`             | Better-Auth session table (required)                          |
| `accounts`             | Better-Auth OAuth accounts table (required)                   |
| `verifications`        | Better-Auth email verification table (required)               |

> **Note:** Better-Auth requires its own tables (`sessions`, `accounts`, `verifications`). These must be generated via `npx @better-auth/cli generate` and added to the schema.

**No migrations generated** — `src/migrations/` is empty. `pnpm db:gen` has not been run.

**Typo:** `serUpdateSchema` → should be `userUpdateSchema`.

---

## 6. packages/auth — Authentication

### What Exists

**Server config** (`src/server/index.ts`):

```typescript
export const auth = betterAuth({
  secret: env.AUTH_SECRET, // min 32 chars
  baseURL: env.API_BASE_URL,
  database: drizzleAdapter(db, { provider: "pg", schema }),
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: NODE_ENV === "production",
  },
  socialProviders: {
    google: {
      clientId: env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: env.GOOGLE_CLIENT_SECRET ?? "",
      enabled: Boolean(env.GOOGLE_CLIENT_ID && env.GOOGLE_CLIENT_SECRET),
    },
  },
  session: {
    expiresIn: 60 * 60 * 24 * 7, // 7 days
    updateAge: 60 * 60 * 24, // Refresh if older than 1 day
  },
});
```

**Client config** (`src/client/index.ts`):

```typescript
export const authClient = createAuthClient({
  baseURL: env.API_BASE_URL,
});
```

**Configured providers:**

- Email + Password (enabled, email verification on in production)
- Google OAuth (conditionally enabled based on env vars)

### What's Missing

- **Better-Auth schema not generated** — `npx @better-auth/cli generate` hasn't been run. The `sessions`, `accounts`, and `verifications` tables don't exist in `packages/db/src/schema/`.
- **Not integrated into `apps/api`** — No `auth.handler()` mount in Hono routes. Auth endpoints (`/api/auth/*`) don't exist.
- **Not integrated into `apps/web`** — No `authClient` usage in any component. No session provider.
- **No middleware** — `apps/web` has no `middleware.ts` to protect `/customer/*` routes.
- **Email service** — Email verification is configured but no email provider (Resend, SendGrid, etc.) is set up.
- **Other OAuth providers** — Only Google configured. Facebook, GitHub, Apple not set up.

---

## 7. packages/ui — Component Library

### What Exists

**18 components** (+ `lib/utils.ts`, `hooks/use-mobile.tsx`):

| Component           | Notes                                                                       |
| ------------------- | --------------------------------------------------------------------------- |
| `avatar.tsx`        | Radix UI Avatar with fallback                                               |
| `badge.tsx`         | Status/label badge                                                          |
| `breadcrumb.tsx`    | Navigation breadcrumbs                                                      |
| `button.tsx`        | 6 variants (default, destructive, outline, secondary, ghost, link), 4 sizes |
| `card.tsx`          | Card + CardHeader/Footer/Content/Description                                |
| `collapsible.tsx`   | Expand/collapse section (Radix API fixed)                                   |
| `dialog.tsx`        | Modal dialog                                                                |
| `dropdown-menu.tsx` | Context menu/dropdown                                                       |
| `input.tsx`         | Form text input                                                             |
| `label.tsx`         | Form label                                                                  |
| `select.tsx`        | ✨ Radix Select with trigger, content, item, groups                         |
| `separator.tsx`     | Visual divider                                                              |
| `sheet.tsx`         | Side drawer                                                                 |
| `sidebar.tsx`       | Full sidebar system (21KB — used in apps/web + apps/dashboard)              |
| `skeleton.tsx`      | Loading placeholder                                                         |
| `switch.tsx`        | Toggle switch                                                               |
| `textarea.tsx`      | ✨ Multi-line text input                                                    |
| `tooltip.tsx`       | Hover tooltip                                                               |

**Utilities & hooks:**

- `lib/utils.ts` → `cn()` (clsx + tailwind-merge)
- `hooks/use-mobile.tsx` → 768px breakpoint with SSR safety

**Exports pattern:**

```json
{
  "./components/*": "./src/components/*.tsx",
  "./lib/*": "./src/lib/*.ts",
  "./hooks/*": "./src/hooks/*.ts"
}
```

### What's Missing

**No barrel export (`src/index.ts`)**  
All imports must use deep paths: `@triplone/ui/components/button`. A barrel export would enable `@triplone/ui` as a single import for consuming apps.

**Missing components** (commonly needed, not yet added via shadcn CLI):

| Component         | Why Needed                                              |
| ----------------- | ------------------------------------------------------- |
| `form.tsx`        | React Hook Form integration — needed for all form pages |
| `checkbox.tsx`    | Multi-select options                                    |
| `radio-group.tsx` | Privacy settings, single-choice options                 |
| `table.tsx`       | Booking lists, admin data tables                        |
| `pagination.tsx`  | Blog, tour listings                                     |
| `toast.tsx`       | Action feedback (booking confirmed, saved, etc.)        |
| `alert.tsx`       | Error/info messages                                     |
| `progress.tsx`    | Upload progress, verification steps                     |
| `tabs.tsx`        | Settings page sections                                  |
| `command.tsx`     | Search command palette                                  |

**Zod version mismatch:**  
`packages/ui/package.json` depends on `zod: "^3.25.76"` while every other package uses `zod: "^4.1.12"`. This can cause type conflicts if Zod types are shared across package boundaries.

---

## 8. tooling/env — Environment Config

### What Exists

Custom env validation package (exported as `@triplone/env`):

```
tooling/env/src/
├── server/index.ts   → Server env schema + export
├── client/index.ts   → Client env schema + export
└── helper/
    ├── initialize-env.ts   → Zod parse + singleton cache + dotenv load
    └── env-root.ts         → Finds workspace root by pnpm-workspace.yaml
```

**Server env vars:**

```
DATABASE_URL          → required, URL
PORT                  → number, default 5000
API_VERSION           → string, default "v1"
AUTH_SECRET           → string, min 32 chars
GOOGLE_CLIENT_ID      → optional string
GOOGLE_CLIENT_SECRET  → optional string
API_BASE_URL          → URL, default http://localhost:5000
NODE_ENV              → development|production|test
```

**Client env vars:**

```
API_BASE_URL          → URL, default http://localhost:5000
NODE_ENV              → development|production|test
```

**Pattern:** Singleton per env type, cached on `globalThis`, process exits on validation failure (good).

**Env files:** `.env.server.example` and `.env.client.example` exist at repo root. Actual `.env.server` and `.env.client` files are gitignored and must be created locally.

### What's Missing

- `NEXT_PUBLIC_*` prefix handling for Next.js client env vars (currently the env package loads from `.env.client` which works for the API, but Next.js apps need `NEXT_PUBLIC_` prefix for browser exposure).
- No `RESEND_API_KEY` or email service env var yet.
- No `STRIPE_*` or payment provider env vars yet.

---

## 9. Tooling (ESLint / TypeScript / Tailwind)

### ESLint (`tooling/eslint-config`)

Three configs:

- `./base` — TypeScript + turbo plugin + prettier
- `./next-js` — Next.js core web vitals + react hooks
- `./react-internal` — React hooks for library packages

ESLint 9 (flat config format) — modern, correct choice.

**Issue:** Root `.eslintrc.js` at repo root references a non-existent export path. Apps use `eslint.config.js` (flat config) correctly but the root file is legacy format and may conflict.

### TypeScript (`tooling/typescript-config`)

Three presets:

- `base.json` — ES2022, ESNext modules, strict, bundler resolution
- `nextjs.json` — extends base + Next.js plugin
- `react-library.json` — extends base + react-jsx

All packages extend one of these. Consistent.

### Tailwind CSS (`tooling/tailwind-config`)

Design system defined in `global.css` using OKLch color space (Tailwind v4 style):

- Primary brand: `#006DED` (blue)
- Full semantic token set (background, foreground, card, muted, accent, destructive, etc.)
- Sidebar-specific tokens
- 5 chart colors
- Full dark mode support

**Prettier:** 80-char width, double quotes, ES5 trailing commas, `prettier-plugin-tailwindcss` (sorts Tailwind classes). `cn` and `cva` are registered as Tailwind functions.

**pnpm:** Isolated node_modules, `workspace:*` protocol, strict phantom dependency prevention.

---

## 10. Critical Issues

These must be fixed before any new feature is built on top of them.

### 🔴 CRITICAL

**1. ~~Duplicate customer routes in `apps/web`~~** ✅ **RESOLVED**  
~~Both `app/customer/` and `app/(customer)/` existed with identical files.~~ The duplicate `app/customer/` directory (46 files) was deleted in commit `b363d14`.

**2. All API route handlers are empty**  
`apps/api/src/routes/users/index.ts` registers 3 routes with `() => {}` handlers. No route returns actual data. The API technically runs and documents itself but doesn't function.

**3. Duplicate conflicting route in `apps/api`**  
`src/routes/index.route.ts` defines a second `POST /users` with a toy inline handler that conflicts with the proper `users/` route. This file is a leftover from the initial setup. Delete it and remove its import from `app.ts`.

**4. No database migrations have been generated**  
`packages/db/src/migrations/` is empty. The schema exists in TypeScript but has never been applied to a real database. Nothing will work until `pnpm db:gen && pnpm db:push` (or `db:migrate`) is run.

**5. Better-Auth tables not in schema**  
`packages/auth` configures Better-Auth with a Drizzle adapter, but the required tables (`sessions`, `accounts`, `verifications`) are not in `packages/db/src/schema/`. `npx @better-auth/cli generate` needs to be run and the output added to the schema.

**6. Auth not integrated anywhere**  
`packages/auth` is configured but imported by nothing. `apps/api` doesn't mount auth handlers. `apps/web` doesn't use `authClient`. No route is protected.

### 🟡 HIGH

**7. No CORS on the API**  
`apps/api` has no CORS middleware. Any browser-based call from `apps/web` or `apps/dashboard` will be blocked by the browser's same-origin policy.

**8. Zod version mismatch**  
`packages/ui` uses `zod@^3.25.76` while all other packages use `zod@^4.1.12`. Zod v4 has breaking API changes. If Zod types from `packages/ui` are ever used in a Zod v4 context, you'll get subtle type errors.

**9. `serUpdateSchema` typo**  
`packages/db/src/schema/users.ts` exports `serUpdateSchema` (missing the `u`). It should be `userUpdateSchema`. Any code importing this will have an odd name.

**10. Missing pages linked from navbar**  
`apps/web`'s navbar links to `/login`, `/about`, `/tour`, `/package`, `/contact`, and `/book` — none of which exist. These result in 404s.

---

## 11. Improvements Before Next Implementation

Ordered by priority. Complete these before adding major new features.

### Tier 1 — Must Fix Now (Blockers)

| #   | Task                                                                                                               | Where              | Why                         |
| --- | ------------------------------------------------------------------------------------------------------------------ | ------------------ | --------------------------- |
| 1   | ~~Delete `apps/web/app/customer/` (old non-group routes)~~                                                         | ~~apps/web~~       | ✅ Done (commit `b363d14`)  |
| 2   | Delete `apps/api/src/routes/index.route.ts` and remove from `app.ts`                                               | apps/api           | Duplicate conflicting route |
| 3   | Run `npx @better-auth/cli generate` → add output to `packages/db/src/schema/`                                      | packages/auth + db | Auth requires tables        |
| 4   | Run `pnpm db:gen` + `pnpm db:push`                                                                                 | packages/db        | No DB tables exist          |
| 5   | Fix typo: `serUpdateSchema` → `userUpdateSchema`                                                                   | packages/db        | Bad export name             |
| 6   | Add CORS middleware to `apps/api` (`hono/cors`)                                                                    | apps/api           | Blocks all frontend calls   |
| 7   | Mount Better-Auth handlers in `apps/api`: `app.on(["POST","GET"], "/api/auth/**", (c) => auth.handler(c.req.raw))` | apps/api           | Auth endpoints don't exist  |

### Tier 2 — Complete Before Feature Work

| #   | Task                                                                    | Where       | Why                              |
| --- | ----------------------------------------------------------------------- | ----------- | -------------------------------- |
| 8   | Implement user route handlers (getAll, create, getById) with DB queries | apps/api    | Routes return nothing            |
| 9   | Add auth middleware to protect routes needing authentication            | apps/api    | All endpoints are public         |
| 10  | Create `apps/web/middleware.ts` to protect `/customer/*` routes         | apps/web    | Dashboard is publicly accessible |
| 11  | Add `authClient` session provider to `apps/web`                         | apps/web    | No auth state in app             |
| 12  | Create `/login` page in `apps/web`                                      | apps/web    | Navbar links to 404              |
| 13  | Bump `packages/ui` Zod to `^4.1.12`                                     | packages/ui | Version mismatch                 |

### Tier 3 — Before Any Customer-Facing Feature

| #   | Task                                                                                    | Where       | Why                          |
| --- | --------------------------------------------------------------------------------------- | ----------- | ---------------------------- |
| 14  | Define remaining DB schemas (agencies, tours, bookings, reviews, payments, etc.)        | packages/db | No data model                |
| 15  | Add missing UI components: `form`, `toast`, `tabs`, `table` (`select` + `textarea` ✅)  | packages/ui | Needed for forms             |
| 16  | Replace mock data in `apps/web` with real API calls                                     | apps/web    | All data is hardcoded        |
| 17  | Add pagination to `GET /users` (and future list endpoints)                              | apps/api    | Will break at scale          |
| 18  | Add `/health` endpoint to `apps/api`                                                    | apps/api    | Needed for deployment checks |
| 19  | Create `apps/web/app/(main)/(auth)/` route group with login/signup/reset-password pages | apps/web    | Auth flow doesn't exist      |
| 20  | Add error boundaries and loading states to `apps/web`                                   | apps/web    | No error/loading UX          |
| 21  | Create `packages/ui/src/index.ts` barrel export                                         | packages/ui | Currently all deep imports   |

---

## 12. What's Ready vs What Isn't

### Ready / Solid Foundation

| What                                   | Status                         |
| -------------------------------------- | ------------------------------ |
| Turborepo + pnpm monorepo setup        | ✅ Well configured             |
| TypeScript strict mode everywhere      | ✅ Consistent                  |
| Tailwind v4 + design system tokens     | ✅ Solid OKLch color palette   |
| ESLint + Prettier code style           | ✅ Enforced                    |
| DB singleton client pattern            | ✅ Correct pattern             |
| Env validation with Zod                | ✅ Singleton, exits on failure |
| OpenAPI/Swagger documentation          | ✅ Auto-generated from routes  |
| Hono route/handler separation pattern  | ✅ Good architecture           |
| Docker multi-stage build for API       | ✅ Production-ready build      |
| 18 shadcn/ui components                | ✅ Available and styled        |
| Homepage UI                            | ✅ Complete (static)           |
| Customer dashboard UI (all 5 sections) | ✅ Complete (mock data)        |
| Blog UI                                | ✅ Complete (mock data)        |
| Agency dashboard UI (9 pages)          | ✅ Complete (mock data)        |
| Roles defined (6 roles)                | ✅ Enum in DB schema           |
| Better-Auth configuration              | ✅ Configured (not wired)      |
| tsup build pipeline                    | ✅ Optimized ESM output        |
| Turbopack dev builds                   | ✅ Enabled on web + dashboard  |

### Not Ready

| What                        | Gap                               |
| --------------------------- | --------------------------------- |
| API route handlers          | All empty                         |
| Authentication              | Configured, not wired up          |
| Database migrations         | Never run                         |
| Better-Auth DB tables       | Not in schema                     |
| Protected routes            | None exist                        |
| Real data in frontend       | All mock                          |
| Login/signup pages          | Don't exist                       |
| Tour/booking/agency schemas | Don't exist                       |
| Admin dashboard             | UI built (mock data, no auth/API) |
| Email service               | Not integrated                    |
| Tests                       | Zero test files                   |
| CORS                        | Not configured                    |
| Rate limiting               | Not configured                    |

---

## Appendix — File Counts by Package

| Package                   | TS Files | Approx Lines |
| ------------------------- | -------- | ------------ |
| apps/api                  | 8        | ~191         |
| apps/web                  | 72       | ~4,860       |
| apps/dashboard            | 20       | ~4,500       |
| packages/db               | 7        | ~150         |
| packages/auth             | 2        | ~40          |
| packages/ui               | 21       | ~1,975       |
| tooling/env               | 4        | ~100         |
| tooling/eslint-config     | 3        | ~80          |
| tooling/typescript-config | 3        | JSON         |
| tooling/tailwind-config   | 2        | ~100         |
| **Total**                 | **~142** | **~12,000**  |

---

_This document was generated from a full automated scan of the repository on Feb 19, 2026. Last updated after PR #7/#8/#9 review and merge._
