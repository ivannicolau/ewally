import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonService } from 'src/person/person.service';
import { RelationsData } from 'src/utils/people.dto';
import { PersonModule } from 'src/person/person.module';
import { PersonController } from 'src/person/person.controller';

describe('AppController', () => {
	let appController: AppController;
	let personService: PersonService;

	beforeEach(async () => {
		const app: TestingModule = await Test.createTestingModule({
			controllers: [AppController, PersonController],
			providers: [AppService, PersonService],
			imports: [RelationsData, PersonModule],
		}).compile();

		appController = app.get<AppController>(AppController);
		personService = app.get<PersonService>(PersonService);
	});

	describe('root', () => {
		it('should return "Hello World!"', () => {
			personService.createPerson({ cpf: '12345678902', name: 'Vampira' });
			personService.createPerson({ cpf: '12345678903', name: 'Rosana' });
			personService.createPerson({ cpf: '12345678904', name: 'Lince' });
			appController.clearPeople();
			expect(personService.getPerson('12345678902')).toBe({
				statusCode: 404,
				message: 'Essa pessoa não existe',
			});
		});
	});
});
