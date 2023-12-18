import { ApiProperty } from '@nestjs/swagger';

export class RelationsDTO {
	@ApiProperty({ description: 'CPF da primeira pessoa', required: true })
	primeCpf: string;

	@ApiProperty({ description: 'CPF da segunda pessoa', required: true })
	secondCpf: string;
}
