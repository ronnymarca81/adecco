# Use the official Node.js image as the base image
FROM node:18.17.1-alpine

RUN mkdir -p /app

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./


COPY ./docker-entrypoint-initdb.d/mongo-init.js /docker-entrypoint-initdb.d/mongo-init.js

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose the port that Next.js will run on
EXPOSE 3000


CMD ["npm", "run", "dev"]

