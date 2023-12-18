import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { people } from 'src/general/app.module';
import { RelationsDTO } from './dto/relations.dto';

@Injectable()
export class RelationsService {
	private readonly relationFuncs = people;

	addRelation(relations: RelationsDTO): void {
		if (
			this.relationFuncs.alreadyHere(relations.primeCpf) &&
			this.relationFuncs.alreadyHere(relations.secondCpf)
		) {
			this.relationFuncs.addRelation(
				relations.primeCpf,
				relations.secondCpf,
			);
			return;
		}

		throw new HttpException(`Pessoa não encontrada`, HttpStatus.NOT_FOUND);
	}

	getRecomendations(cpf: string): string[] {
		const person = people.findPerson(cpf);
		if (person) {
			return people.recomendations(person);
		}
		throw new HttpException(
			`Erro ao buscar recomendações`,
			HttpStatus.INTERNAL_SERVER_ERROR,
		);
	}
}
