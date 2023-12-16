import { Injectable } from '@nestjs/common';
import { RelationsData } from 'src/utils/people.dto';

@Injectable()
export class AppService {
  private readonly relations: RelationsData;
  eraseAll() {
    this.relations.eraseAll();
  }
}
