FROM node:18.20.4 AS build

ENV SENTRY_URL=''
ENV SENTRY_AUTH_TOKEN=''
ENV SENTRY_ORG=''
ENV SENTRY_PROJECT=''

WORKDIR	/app

COPY . .

RUN npm i && npm run build && npm run sentry:sourcemaps && npm cache clean --force

FROM node:18.20.4-alpine3.19 AS deploy

ENV NODE_ENV=production

WORKDIR /app

COPY --from=build /app/dist .
COPY --from=build /app/package.json .
COPY --from=build /app/package-lock.json .
COPY --from=build /app/entrypoint.sh .
COPY --from=build /app/SWAGGER.md .

RUN npm i --omit=dev && npm cache clean --force

CMD ["/bin/sh", "/app/entrypoint.sh"]