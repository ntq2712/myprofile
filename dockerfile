FROM node:25-alpine as base

WORKDIR /app

COPY yarn.lock package.json ./

RUN yarn

COPY . .

RUN yarn build 

FROM node:25-apline as runner

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn

COPY --from=base /app ./

EXPOSE 4201

CMD [ "yarn start" ] 