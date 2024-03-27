FROM mcr.microsoft.com/devcontainers/typescript-node:18-bullseye as build

WORKDIR /app/portfolio
COPY .. .
RUN npm ci