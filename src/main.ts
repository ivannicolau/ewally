import { NestFactory } from '@nestjs/core';
import { AppModule } from './general/app.module';
import { Logger } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
	const logger = new Logger('main.ts');
	const app = await NestFactory.create(AppModule);
	app.enableCors();
	const config = new DocumentBuilder()
		.setTitle('Documentação API - Challenge Ewally')
		.setDescription(
			'Rotas e descrição para realizar requisições na API de Gerenciamento de Amizades',
		)
		.setVersion('1.0')
		.build();

	const document = SwaggerModule.createDocument(app, config);
	document.tags = document.tags.sort((a, b) => a.name.localeCompare(b.name));
	SwaggerModule.setup('swagger', app, document);

	await app.listen(3000);
	logger.log(`Application listen on port 3000`);
}
bootstrap();
