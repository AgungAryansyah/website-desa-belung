# Stage 1: Build the Next.js application
FROM node:23-alpine AS builder

WORKDIR /app

# Copy package.json and package-lock.json first to leverage Docker cache
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy the rest of your application code
COPY . .

# Copy your .env file for build (if needed during build)
COPY .env ./

# Generate the optimized production build
RUN npm run build

# Stage 2: Create the production-ready image
FROM node:23-alpine

# Set the working directory
WORKDIR /app

# Install production dependencies including Next.js
COPY package.json package-lock.json ./
RUN npm ci --omit=dev && npm cache clean --force

# Copy the built application from the builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.mjs ./next.config.mjs

# Copy your .env file to production container
COPY .env ./

# Create a non-root user for security
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001
RUN chown -R nextjs:nodejs /app
USER nextjs

# Expose the port
EXPOSE 3000

# Set NODE_ENV to production (system environment variable)
ENV NODE_ENV=production

# Your .env file variables are automatically loaded by Next.js
# NODE_ENV=production tells Node.js this is a production environment

# Command to start the application
CMD ["npx", "next", "start"]