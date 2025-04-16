# Use Node.js as the base image
FROM node
 
# Set the working directory inside the container
WORKDIR /app
 
# Copy package.json and package-lock.json (if available) first
COPY package.json ./
 
# Install dependencies
RUN npm install
 
# Copy all project files into the container
COPY . .
 
# Expose port 3000 to access the app
EXPOSE 3000
 
# Start the Node.js server
CMD ["node", "server.js"]