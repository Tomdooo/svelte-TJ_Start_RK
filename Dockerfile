FROM node:19-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5000
ENV HOST=0.0.0.0

CMD npm run dev
#CMD ["npm", "start"]

#FROM node:19
#
## Create app directory
#WORKDIR /
#
## Install app dependencies
## A wildcard is used to ensure both package.json AND package-lock.json are copied
## where available (npm@5+)
#COPY package*.json ./
#
#RUN npm install
#
## If you are building your code for production
##RUN npm ci --only=production
#
## Bundle app source
#COPY . .
#
##RUN npm run build
#
## Expose app port
#EXPOSE 5173
#
## Define start command
##CMD [ "node", "server.js" ]
#
#CMD npm run dev