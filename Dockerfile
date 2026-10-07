FROM node:22-alpine
WORKDIR /app
COPY --chown=node:node server.mjs package.json ./
COPY --chown=node:node dist ./dist
USER node
ENV NODE_ENV=production
EXPOSE 3000
CMD ["node", "server.mjs"]
