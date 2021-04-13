FROM node:14-alpine as builder

ENV NODE_ENV build

USER node
WORKDIR /home/node

COPY app ./

RUN npm ci \
    && npm run build

# ---

FROM node:14-alpine

ENV NODE_ENV production

USER node
WORKDIR /home/node

COPY --from=builder /home/node/*.json /home/node/
COPY --from=builder /home/node/*.csv /home/node/
COPY --from=builder /home/node/dist/ /home/node/dist/

RUN npm ci

EXPOSE 3000
CMD ["node", "dist/main.js"]