import { Test, TestingModule } from '@nestjs/testing';
import { PersonController } from './person.controller';
import { PersonService } from './person.service';
import { NewPersonDTO } from './dto/newPerson.dto';
import { RelationsData } from 'src/utils/people.dto';
import { AppController } from 'src/general/app.controller';
import { AppService } from 'src/general/app.service';
import { AppModule } from 'src/general/app.module';

describe('PersonController', () => {
	let personController: PersonController;
	let personService: PersonService;

	beforeEach(async () => {
		const app: TestingModule = await Test.createTestingModule({
			controllers: [PersonController, AppController],
			providers: [PersonService, AppService],
			imports: [RelationsData, AppModule],
		}).compile();

		personService = app.get<PersonService>(PersonService);
		personController = app.get<PersonController>(PersonController);
	});

	describe('createPerson', () => {
		it('Deveria retornar status 200 caso a pessoa for criada e 400 caso o usuário já esteja cadastrado', () => {
			const newPerson: NewPersonDTO = {
				name: 'Vampira',
				cpf: '12345678901',
			};
			personService.createPerson(newPerson);
			expect(personController.getPerson(newPerson.cpf)).toEqual(
				newPerson,
			);
		});
	});

	describe('createPersonEqual', () => {
		it('Deveria retornar 400 caso o usuário já esteja cadastrado', () => {
			const newPerson: NewPersonDTO = {
				name: 'Vampira',
				cpf: '12345678901',
			};
			personService.createPerson(newPerson);
			expect(personController.createPerson(newPerson)).toBe({
				statusCode: 400,
				message: 'Essa pessoa já está registrada',
			});
		});
	});
});
