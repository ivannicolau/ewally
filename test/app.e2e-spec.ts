import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/general/app.module';
import { PersonModule } from 'src/person/person.module';
import { RelationsModule } from 'src/relations/relations.module';
import { PersonController } from 'src/person/person.controller';
import { RelationsController } from 'src/relations/relations.controller';
import { AppController } from 'src/general/app.controller';
import { PersonService } from 'src/person/person.service';
import { RelationsService } from 'src/relations/relations.service';
import { AppService } from 'src/general/app.service';
import { RelationsData } from 'src/utils/people.dto';

describe('AppController (e2e)', () => {
	let app: INestApplication;

	beforeEach(async () => {
		const moduleFixture: TestingModule = await Test.createTestingModule({
			imports: [AppModule, PersonModule, RelationsModule],
			controllers: [PersonController, RelationsController, AppController],
			providers: [
				PersonService,
				RelationsService,
				AppService,
				RelationsData,
			],
		}).compile();

		app = moduleFixture.createNestApplication();
		await app.init();
	});

	it('/ (GET)', () => {
		return request(app.getHttpServer())
			.get('/')
			.expect(200)
			.expect('Hello World!');
	});
});
