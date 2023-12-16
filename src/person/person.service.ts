import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Person, RelationsData } from 'src/utils/people.dto';

@Injectable()
export class PersonService {
  private readonly people: RelationsData;

  createPerson(cpf: string, name: string) {
    const empty: Person[] = [];
    if (this.people.exists(cpf)) {
      throw new HttpException(
        `Essa pessoa já está registrada`,
        HttpStatus.BAD_REQUEST,
      );
    }

    this.validator(cpf);

    const newPerson: Person = { cpf: cpf, name: name, relation: empty };
    this.people.createPerson(newPerson);
  }

  private validator(cpf: string) {
    if (cpf.replace(/[^\d.-]+/g, '').length != 11) {
      throw new HttpException(`CPF inválido`, HttpStatus.BAD_REQUEST);
    }
    return true;
  }

  public getPerson(cpf: string) {
    if (this.people.exists(cpf)) {
      return this.people.findPerson(cpf);
    }
    throw new HttpException(`Essa pessoa não existe`, HttpStatus.NOT_FOUND);
  }
}
