FROM node:10

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# Ensure both package.json AND package-lock.json are copied
COPY package*.json ./

RUN npm install

# Bundle app source
COPY app.js /usr/src/app/
COPY views/todo.ejs /usr/src/app/views/
COPY test/todo.text /usr/src/app/test/

EXPOSE 8080
CMD [ "node", "server.js" ]