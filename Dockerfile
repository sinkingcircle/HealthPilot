FROM node:20-slim

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# Expose port 5173 for development
EXPOSE 5173

# Start the app in development mode
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]