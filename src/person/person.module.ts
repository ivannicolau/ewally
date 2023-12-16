import { RelationsData } from 'src/utils/people.dto';
import { PersonService } from './person.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [RelationsData],
  controllers: [],
  providers: [PersonService],
})
export class PersonModule {}
