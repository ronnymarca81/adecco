# Use the official Node.js image as the base image
FROM node:18.17.1-alpine

RUN mkdir -p /app

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# ENV MONGODB_URI "mongodb://mongo:27017"
# ENV DB_NAME adecco

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# RUN npm run build

# Expose the port that Next.js will run on
EXPOSE 3000

# Start the application
CMD ["npm", "run", "dev"]

