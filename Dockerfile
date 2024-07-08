# Use an official Node runtime as a base image
FROM node:18-alpine AS base

# Set the working directory
WORKDIR /home/node/app

# Copy package files
COPY package*.json ./
COPY yarn.lock ./

# Install dependencies using --legacy-peer-deps
RUN yarn install

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
RUN yarn install --production

# Copy built files from the builder stage
COPY --from=base /home/node/app/dist ./dist
COPY --from=base /home/node/app/build ./build

# Expose the necessary port
EXPOSE 3000

# Command to run the application
CMD ["node", "dist/server.js"]


# PORT=3000
# DATABASE_URI=mongodb+srv://easy:0igGnrQln6H6AE6G@cluster0.mxl1bcb.mongodb.net/
# PAYLOAD_SECRET=7157f10e-a393-4487-ab13-bb1aed562bda
# PAYLOAD_PUBLIC_SERVER_URL=https://king-prawn-app.ondigitalocean.app
# NEXT_PUBLIC_SERVER_URL=https://king-prawn-app.ondigitalocean.app
# REVALIDATION_KEY=demo-revalation-key
# NEXT_PRIVATE_REVALIDATION_KEY=demo-revalation-key
# NEXT_PRIVATE_DRAFT_SECRET=demo-draft-secret


# IK_PUBLIC_KEY=public_dFBn4JpdmWVhwdTePSkQmnimT3o=
# IK_PRIVATE_KEY=private_pibywcBMyYjG1aq4J6VdwugzoTI=
# IK_ENDPOINT=https://ik.imagekit.io/6cga8hi9z/
# IMAGEKIT_URL=https://ik.imagekit.io/


# IMAGEKIT_FOLDER_NAME=All_Products
# NEXT_PUBLIC_GOOGLE_ANALYTICS=G-7KXD0B7Z19
# GOOGLE_ANALYTICS=G-7KXD0B7Z19
