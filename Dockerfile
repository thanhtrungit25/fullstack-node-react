FROM node:20 AS build

ARG VITE_BACKEND_URL=http://localhost:3001/api/v1

ENV HOST 0.0.0.0

WORKDIR /build
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx AS final
WORKDIR /usr/share/nginx/html

COPY --from=build /build/dist .