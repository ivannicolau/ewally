import { Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Person')
@Controller('/person')
export class PersonController {
  @Post()
  @ApiOperation({
    description: 'Cria uma nova pessoa',
  })
  createPerson() {
    return 'TODO';
  }

  @ApiOperation({
    description: 'Verifica se o cpf informado existe no sistema',
  })
  @Get('/:CPF')
  getPerson(@Param('CPF') cpf: string) {
    console.log(cpf);
    return 'TODO';
  }
}
