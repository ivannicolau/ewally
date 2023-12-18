import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { RelationsService } from './relations.service';
import { RelationsDTO } from './dto/relations.dto';
@ApiTags('Relations')
@Controller()
export class RelationsController {
	constructor(private readonly relationsService: RelationsService) {}
	@ApiOperation({
		description:
			'Cria uma nova relação entre duas pessoas, com base em dois cpfs informados',
	})
	@Post()
	createRelation(@Body() relations: RelationsDTO) {
		return this.relationsService.addRelation(relations);
	}

	@ApiOperation({
		description:
			'Busca as recomendações de amizade a partir de um cpf informado',
	})
	@Get('/recommendations/:CPF')
	getRecommendations(@Param('CPF') cpf: string) {
		return this.relationsService.getRecomendations(cpf);
	}
}
