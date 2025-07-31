FROM node:lts-alpine AS base
 
FROM base AS builder
RUN apk update
RUN apk add --no-cache libc6-compat
WORKDIR /app
RUN npm i turbo --global
COPY . .
RUN turbo prune backend --docker

FROM base AS installer
RUN apk update
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY --from=builder /app/out/json/ .
RUN npm ci
COPY --from=builder /app/out/full/ .
RUN npm run build
ENV NODE_ENV production
RUN npm ci --only=production --omit=dev && npm cache clean --force
 
FROM base AS runner
WORKDIR /app
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nestjs
USER nestjs
COPY --chown=nestjs:nodejs ./apps/backend/.env.production.local .env
COPY --from=installer --chown=nestjs:nodejs /app/apps/backend/dist ./apps/backend/dist
COPY --from=installer --chown=nestjs:nodejs /app/packages/ ./packages
COPY --from=installer --chown=nestjs:nodejs /app/node_modules ./node_modules
CMD node apps/backend/dist/main.js
