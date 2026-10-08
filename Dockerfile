# syntax=docker/dockerfile:1
FROM node:22-alpine
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --omit=dev
COPY --chown=node:node server.mjs accounts.mjs ./
COPY --chown=node:node migrations ./migrations
COPY --chown=node:node dist ./dist
USER node
ENV NODE_ENV=production
EXPOSE 3000
CMD ["node", "server.mjs"]
