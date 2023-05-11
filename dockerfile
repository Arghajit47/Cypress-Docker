FROM node:14-alpine
COPY . /workdir
WORKDIR /workdir
CMD npm run test-headless
