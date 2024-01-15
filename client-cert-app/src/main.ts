import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as fs from 'fs';
import * as https from 'https';

async function bootstrap() {
  const httpsOptions = {
    key: fs.readFileSync('../certs/server-private-key.pem'),
    cert: fs.readFileSync('../certs/server-certificate.pem'),
    ca: [fs.readFileSync('../certs/ca-certificate.pem')],
    requestCert: true,
    rejectUnauthorized: true,
  };


  const app = await NestFactory.create(AppModule, { httpsOptions });
  await app.listen(443);
}
bootstrap();
