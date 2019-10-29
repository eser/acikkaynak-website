# Arguments
ARG NODE_ENV=production
ARG PORT=3000


# STAGE-1
# Install Node.js docker container
FROM node:alpine as builder

# Requirements
RUN apk add yarn python make g++

# Install app dependencies
# ensure both package.json AND yarn.lock are copied
ADD ./package.json ./yarn.lock ./

RUN yarn install --frozen-lockfile --non-interactive


# STAGE-2
# Install Node.js docker container
FROM node:alpine

# Requirements
RUN apk add yarn

# Environment variables
ENV NODE_ENV=${NODE_ENV}
ENV PORT=${PORT}

# Create app directory
WORKDIR /usr/src/app

# Transfer app dependencies
COPY --from=builder ./node_modules ./node_modules

# Bundle app source
COPY ./ ./

EXPOSE ${PORT}

CMD ["yarn", "start"]
