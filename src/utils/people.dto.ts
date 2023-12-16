import { HttpException, HttpStatus } from '@nestjs/common';

export class RelationsData {
  private relations: Person[] = [];

  public exists(cpf: string) {
    if (this.relations.find((relation) => relation.cpf === cpf)) {
      return true;
    }
    return false;
  }

  public addRelation(newRelation: Person) {
    this.relations
      .find((relation) => relation.cpf === newRelation.cpf)
      .relation.push(newRelation);
  }

  public createPerson(newRelation: Person) {
    this.relations.push(newRelation);
  }

  public findPerson(cpf: string) {
    if (this.exists(cpf)) {
      return this.relations.find((relation) => relation.cpf === cpf);
    }
    throw new HttpException(`Essa pessoa não existe`, HttpStatus.NOT_FOUND);
  }

  public eraseAll() {
    const newRelations: Person[] = [];
    this.relations = newRelations;
  }

  public recomendations(cpf: string) {
    console.log(cpf);
    return 'todo';
  }
}

export interface Person {
  cpf: string;
  name: string;
  relation: Person[];
}
