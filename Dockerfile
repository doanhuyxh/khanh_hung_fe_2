FROM node:20

EXPOSE 3000

WORKDIR /app

COPY package.json ./
COPY public ./
COPY .next ./

RUN npm install

CMD [ "npm", "start" ]
