FROM node:lts-alpine AS base
 
FROM base AS builder
RUN apk update
RUN apk add --no-cache libc6-compat
WORKDIR /app
RUN npm i turbo --global
COPY . .
RUN turbo prune frontend --docker
 
FROM base AS installer
RUN apk update
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY --from=builder /app/out/json/ .
RUN npm ci
COPY --from=builder /app/out/full/ .
COPY --from=builder /app/eslint.config.js eslint.config.js
RUN npm run build

FROM base AS runner
WORKDIR /app
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs
COPY --chown=nextjs:nodejs ./apps/frontend/.env.production.local .env
COPY --from=installer --chown=nextjs:nodejs /app/apps/frontend/.next/standalone ./
COPY --from=installer --chown=nextjs:nodejs /app/apps/frontend/.next/static ./apps/web/.next/static
COPY --from=installer --chown=nextjs:nodejs /app/apps/frontend/public ./apps/web/public
CMD node apps/frontend/server.js
