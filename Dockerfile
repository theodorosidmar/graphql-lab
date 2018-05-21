FROM node:9.5.0-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
EXPOSE 3000
COPY package.json /usr/src/app
RUN npm install --production --no-cache
COPY . /usr/src/app
CMD [ "node", "." ]