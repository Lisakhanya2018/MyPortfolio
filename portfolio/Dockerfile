# Step 1: Build stage
FROM node:20-alpine AS build

WORKDIR /app

# Copy package.json and package-lock.json from portfolio folder
COPY ./portfolio/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app from portfolio folder
COPY ./portfolio/. ./

# Build the React app
RUN npm run build

# Step 2: Serve with Nginx
FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
