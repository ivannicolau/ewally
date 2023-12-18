import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Person } from 'src/utils/people.dto';
import { NewPersonDTO } from './dto/newPerson.dto';
import { people } from 'src/general/app.module';

@Injectable()
export class PersonService {
	private readonly people = people;

	createPerson(newPerson: NewPersonDTO) {
		if (this.people.validator(newPerson.cpf)) {
			if (this.people.alreadyHere(newPerson.cpf)) {
				throw new HttpException(
					`Essa pessoa já está registrada`,
					HttpStatus.BAD_REQUEST,
				);
			}

			const empty: Person[] = [];
			const personToInsert: Person = {
				name: newPerson.name,
				cpf: newPerson.cpf,
				relation: empty,
			};
			this.people.createPerson(personToInsert);
			return;
		}
	}

	public getPerson(cpf: string) {
		if (this.people.alreadyHere(cpf)) {
			const person: Person = this.people.findPerson(cpf);
			return { cpf: person.cpf, name: person.name };
		}
		throw new HttpException(`Essa pessoa não existe`, HttpStatus.NOT_FOUND);
	}
}
