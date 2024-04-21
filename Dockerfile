# Specify the base image
FROM node:18  as build
# make directory
RUN mkdir -p /app
RUN chmod -R 777 /app
# Set the working directory
WORKDIR /app
# Copy the package.json and package-lock.json files
COPY package*.json .
# Install the dependencies
RUN npm install
# Copy the app files
COPY . .
# Build the app
RUN npm run build

# ## STAGE 2
# FROM nginx:alpine
# ## Remove default nginx index page
# RUN rm -rf /usr/share/nginx/html/*"

# ADD ./config/nginx.conf /etc/nginx/conf.d/nginx.conf
# COPY --from=build /app/dist /var/www/app/
# # Expose the port
# EXPOSE 3000
# Run the app
CMD ["npm","run","start"]