FROM mhart/alpine-node:12

COPY app .

RUN npm ci --prod

CMD ["node", "dynamodb-admin.js"]