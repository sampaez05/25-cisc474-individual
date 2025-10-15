import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3000;
  const host = process.env.HOST || undefined;

  const frontend = process.env.FRONTEND_URL;

  const allowedOrigins = ["https://cisc474-individual.sptherose.workers.dev",frontend];
  console.log(frontend);
  

  app.enableCors({
    origin: allowedOrigins,
    credentials: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
  })

  await app.listen(port, host);
}

void bootstrap();
