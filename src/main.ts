import './core/environments.js';
import './core/dotenv.js';
import './core/sentry/sentry.js';

import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './core/api/filters/exceptions.filter';
import { ValidationPipe } from '@nestjs/common';
import { AppConfig } from './configs/app.config';
import fs from 'node:fs';
import path from 'node:path';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const { httpAdapter } = app.get(HttpAdapterHost);

  app.useGlobalFilters(new AllExceptionsFilter(httpAdapter));

  // enable auto validation
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  const appConfig = app.get(AppConfig);

  app.setGlobalPrefix('api');

  SwaggerModule.setup(
    'api/doc',
    app,
    SwaggerModule.createDocument(
      app,
      new DocumentBuilder()
        .setTitle('NestJS API')
        .setVersion('1.0')
        .setDescription(
          fs.readFileSync(path.resolve('SWAGGER.md')).toString('utf8'),
        )
        .build(),
    ),
  );

  await app.listen(appConfig.port);
}

bootstrap();
