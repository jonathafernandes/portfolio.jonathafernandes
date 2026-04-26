import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService)
  const port = configService.get<number>('PORT') || 3000;

  app.setGlobalPrefix('v1');

  app.enableCors({
    origin: ['http://localhost:5173'],
    methods: 'GET, POST, PUT, DELETE',
    credentials: true,
  })

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Aceita somente campos que existem no DTO, remove campos extras.
      forbidNonWhitelisted: true, // Com essa opção, se vier qualquer campo que não esteja no DTO, dá erro 400. Contrato forte de API, nada passa escondido.
      transform: true, // Sem essa opção, o Nest recebe tudo com JSON puro. Ele transforma payload em DTO. Sempre usar.
    })
  );
  /* O ValidationPipe é um Pipe do Nest que roda antes do controller e tem três principais objetivos
  * 1. Validar os dados de entrada (body) com base nas regras definidas nos DTOs
  * 2. Transformar os dados de entrada em instâncias das classes DTO (transform: true)
  * 3. Filtrar campos não esperados (whitelist e forbidNonWhitelisted)
  */

  // Configuração base do Swagger
  const swaggerConfig = new DocumentBuilder()
    .setTitle('Portfólio API')
    .setDescription('API REST do meu site pessoal')
    .setVersion('1.0')
    .addTag('projects')
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig)

  SwaggerModule.setup('docs', app, document)
  // ⚠️ Com prefixo global da versão, isso vira `/v1/docs`.

  await app.listen(port);

  console.log(`Application is running on: ${await app.getUrl()} 🚀`);
  console.log(`Swagger docs: ${await app.getUrl()}/docs 📚`);
}
bootstrap();

