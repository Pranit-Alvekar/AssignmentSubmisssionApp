# Stage 1: Build the React app
FROM node:18-alpine as build

WORKDIR /react-app/

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Stage 2: Serve the React app using Nginx
FROM nginx:alpine

# Copy the built app from the previous stage to the Nginx directory
COPY --from=build /react-app/build /usr/share/nginx/html

# Expose the default HTTP port
EXPOSE 80

# Start the Nginx server
CMD ["nginx", "-g", "daemon off;"]
