FROM node:22

WORKDIR /app

COPY ./app /app

RUN npm install

# 開発サーバーを起動
CMD ["npm", "run", "dev"]
