FROM node:22-alpine AS builder
RUN apk add --no-cache python3 make g++ vips-dev
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:22-alpine
RUN apk add --no-cache curl vips
WORKDIR /app
ENV NODE_ENV=production
COPY package*.json ./
RUN apk add --no-cache python3 make g++ vips-dev && \
    npm ci --omit=dev && \
    apk del python3 make g++
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/public ./public
RUN mkdir -p .tmp
EXPOSE 1337
CMD ["npm", "run", "start"]
