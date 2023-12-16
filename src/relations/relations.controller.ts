import { Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
@ApiTags('Relations')
@Controller()
export class RelationsController {
  @ApiOperation({
    description:
      'Cria uma nova relação entre duas pessoas, com base em dois cpfs informados',
  })
  @Post()
  createRelation() {
    return 'todo';
  }

  @ApiOperation({
    description:
      'Busca as recomendações de amizade a partir de um cpf informado',
  })
  @Get('/recommendations/:CPF')
  getRecommendations(@Param('CPF') cpf: string) {
    console.log('TODO => ', cpf);
  }
}
