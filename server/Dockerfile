FROM node as builder

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile
RUN npm install typescript -g

COPY . .

RUN yarn build

FROM node:slim

ENV NODE_ENV production
USER node

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn install --production --frozen-lockfile

COPY --from=builder /usr/src/app/dist ./dist

EXPOSE 5000
CMD [ "node", "dist/server.js" ]