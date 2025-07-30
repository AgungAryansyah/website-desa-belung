# Stage 1: Build the Next.js application
FROM node:23-alpine AS builder

WORKDIR /app

# Copy package.json and package-lock.json first to leverage Docker cache
COPY package.json package-lock.json ./

# Install dependencies strictly according to package-lock.json
# Use npm ci for clean installs in CI/CD environments
RUN npm ci

# Copy the rest of your application code
COPY . .

# Generate the optimized production build
# The 'standalone' output option will bundle necessary files into .next/standalone
RUN npm run build

# Stage 2: Create the smaller, production-ready image
FROM node:23-alpine

# Set the working directory
WORKDIR /app

# Copy the 'standalone' output from the builder stage
# This directory contains only the necessary files to run your app
COPY --from=builder /app/.next/standalone ./

# If you have a public directory (for static assets), copy it
COPY --from=builder /app/public ./public

# Expose the port Next.js will listen on
EXPOSE 3000

# Command to start the Next.js application in production mode
# Ensure this matches your package.json "start" script if different
CMD ["npm", "start"]