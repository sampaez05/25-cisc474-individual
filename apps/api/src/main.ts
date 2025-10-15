import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

export const backend = process.env.VITE_BACKEND_URL.split(',');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3000;
  const host = process.env.HOST || undefined;

  const frontend = process.env.FRONTEND_URL.split(',');

  app.enableCors({
    origin: frontend
  })

  await app.listen(port, host);
}

void bootstrap();
