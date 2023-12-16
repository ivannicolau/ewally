import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { RelationsData } from 'src/utils/people.dto';

@Injectable()
export class RelationsService {
  private readonly relationFuncs: RelationsData;

  addRelation(primeCpf: string, secondCpf: string) {
    if (
      this.relationFuncs.exists(primeCpf) &&
      this.relationFuncs.exists(secondCpf)
    ) {
      const prime = this.relationFuncs.findPerson(primeCpf);
      const second = this.relationFuncs.findPerson(secondCpf);
      prime.relation.push(second);
      second.relation.push(prime);
      return;
    }

    throw new HttpException(`Pessoa não encontrada`, HttpStatus.NOT_FOUND);
  }
}
