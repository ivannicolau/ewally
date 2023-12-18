import { RelationsData } from 'src/utils/people.dto';
import { PersonService } from './person.service';
import { Module } from '@nestjs/common';
import { PersonController } from './person.controller';

@Module({
	imports: [RelationsData],
	controllers: [PersonController],
	providers: [PersonService],
})
export class PersonModule {}
