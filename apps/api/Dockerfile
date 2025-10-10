# Multi-stage build for optimal size
FROM node:20-alpine AS base

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Set working directory
WORKDIR /app

# Copy workspace configuration
COPY pnpm-workspace.yaml pnpm-lock.yaml package.json ./

# ===================================
# Dependencies stage
# ===================================
FROM base AS deps

# Copy package files
COPY apps/api/package.json ./apps/api/
COPY packages/typescript-config/package.json ./packages/typescript-config/

# Install dependencies (production only)
RUN pnpm install --frozen-lockfile --prod

# ===================================
# Build stage
# ===================================
FROM base AS build

# Copy package files
COPY apps/api/package.json ./apps/api/
COPY packages/typescript-config/package.json ./packages/typescript-config/

# Install ALL dependencies (including dev)
RUN pnpm install --frozen-lockfile

# Copy source code
COPY apps/api ./apps/api
COPY packages/typescript-config ./packages/typescript-config
COPY tooling/typescript-config ./tooling/typescript-config

# Build the application
WORKDIR /app/apps/api
RUN pnpm build

# ===================================
# Production stage
# ===================================
FROM node:20-alpine AS production

WORKDIR /app

# Copy only production dependencies from deps stage
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/apps/api/node_modules ./apps/api/node_modules

# Copy built application
COPY --from=build /app/apps/api/dist ./apps/api/dist
COPY --from=build /app/apps/api/package.json ./apps/api/

# Set environment
ENV NODE_ENV=production

# Expose port
EXPOSE 5000

# Start the application
WORKDIR /app/apps/api
CMD ["node", "dist/index.js"]
