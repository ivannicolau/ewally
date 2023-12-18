import { HttpException, HttpStatus } from '@nestjs/common';

export class RelationsData {
	private relations: Person[] = [];

	public alreadyHere(cpf: string): boolean {
		if (this.relations.find((relation) => relation.cpf === cpf)) {
			return true;
		}
		return false;
	}

	public addRelation(prime: string, second: string): void {
		const primePerson = this.findPerson(prime);
		const secondPerson = this.findPerson(second);
		primePerson.relation.push(secondPerson);
		secondPerson.relation.push(primePerson);
	}

	public createPerson(newRelation: Person): void {
		this.relations.push(newRelation);
	}

	public findPerson(cpf: string): Person {
		if (this.alreadyHere(cpf)) {
			return this.relations.find((relation) => relation.cpf === cpf);
		}
		throw new HttpException(`Essa pessoa não existe`, HttpStatus.NOT_FOUND);
	}

	public eraseAll() {
		const newRelations: Person[] = [];
		delete this.relations;
		this.relations = newRelations;
	}

	public recomendations(
		person: Person,
		recomendations: { [cpf: string]: number } = {},
	): string[] {
		person.relation.forEach((friend) => {
			friend.relation.forEach((friendOfFriend) => {
				if (
					friendOfFriend.cpf !== person.cpf &&
					!person.relation.includes(friendOfFriend)
				) {
					recomendations[friendOfFriend.cpf] =
						(recomendations[friendOfFriend.cpf] || 0) + 1;
				}
			});
		});

		const filteredFriends = Object.keys(recomendations)
			.filter((cpf) => recomendations[cpf] > 0)
			.sort(
				(prime, second) =>
					recomendations[prime] - recomendations[second],
			);

		return filteredFriends;
	}

	public validator(cpf: string): boolean {
		if (cpf.replace(/[^\d.-]+/g, '').length != 11) {
			throw new HttpException(`CPF inválido`, HttpStatus.BAD_REQUEST);
		}
		return true;
	}
}

export interface Person {
	cpf: string;
	name: string;
	relation?: Person[];
}
