import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function start() {
  const SERVER_PORT = process.env.SERVER_PORT || 5000;
  const app = await NestFactory.create(AppModule);
  await app.listen(SERVER_PORT, () =>
    console.log(`Server started on port: ${SERVER_PORT}`),
  );
}

start();
