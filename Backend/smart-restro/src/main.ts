import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS to allow cross-origin requests from the React app
  app.enableCors({
    origin: 'http://localhost:5173',  // Replace this with your React app's URL and port
    methods: 'GET,POST,PUT,DELETE',   // Specify allowed methods
    credentials: true,  // Set to true if you are dealing with authentication or cookies
  });

  await app.listen(3000);
}
bootstrap();
