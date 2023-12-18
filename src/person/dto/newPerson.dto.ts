import { ApiProperty } from '@nestjs/swagger';

export class NewPersonDTO {
	@ApiProperty({ description: 'Nome da nova pessoa' })
	name: string;

	@ApiProperty({ description: 'CPF da nova pessoa' })
	cpf: string;
}
