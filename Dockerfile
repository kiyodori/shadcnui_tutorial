FROM node:22

WORKDIR /app

COPY ./app /app

RUN npm install

CMD ["npm", "run", "dev"]
