import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { NewPersonDTO } from './dto/newPerson.dto';
import { PersonService } from './person.service';

@ApiTags('Person')
@Controller('/person')
export class PersonController {
	constructor(private readonly personService: PersonService) {}

	@Post()
	@ApiOperation({
		description: 'Cria uma nova pessoa',
	})
	createPerson(@Body() newPerson: NewPersonDTO) {
		return this.personService.createPerson(newPerson);
	}

	@ApiOperation({
		description: 'Verifica se o cpf informado existe no sistema',
	})
	@Get('/:CPF')
	getPerson(@Param('CPF') cpf: string) {
		console.log(cpf);
		return this.personService.getPerson(cpf);
	}
}
