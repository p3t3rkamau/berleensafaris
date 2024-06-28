# Use an official Node runtime as a base image
FROM node:18-alpine AS base

# Set the working directory
WORKDIR /home/node/app

# Copy package files
COPY package*.json ./
COPY yarn.lock ./

# Install dependencies using --legacy-peer-deps
RUN yarn install --legacy-peer-deps

# Copy the rest of the application code
COPY . .

# Build the application
RUN yarn build

# Use a smaller runtime image for production
FROM node:18-alpine AS runtime

# Set the environment variables
ENV NODE_ENV=production
ENV PAYLOAD_CONFIG_PATH=dist/payload/payload.config.js

# Set the working directory
WORKDIR /home/node/app

# Copy package files again for production install
COPY package*.json ./
COPY yarn.lock ./

# Install production dependencies using --legacy-peer-deps
RUN yarn install --production --legacy-peer-deps

# Copy built files from the builder stage
COPY --from=base /home/node/app/dist ./dist
COPY --from=base /home/node/app/build ./build

# Expose the necessary port
EXPOSE 3000

# Command to run the application
CMD ["node", "dist/server.js"]
