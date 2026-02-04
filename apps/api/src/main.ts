import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// TODO: enable CORS with credentials for web origin and add cookie parsing for auth cookies

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
