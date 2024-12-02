FROM node:slim as base
FROM base as development
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 4000
CMD [ "npm" ,"run", "start-dev"]
#-----------stage 2 -----------------------------

FROM base as prodaction 
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 4000
CMD [ "npm" ,"start"]

