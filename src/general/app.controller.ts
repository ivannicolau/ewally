import { Controller, Delete, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
@ApiTags('General')
@Controller()
export class AppController {
	constructor(private readonly appService: AppService) {}

	@ApiOperation({
		description: 'Limpa todos os dados',
	})
	@Delete()
	clearPeople() {
		return this.appService.eraseAll();
	}

	@Get()
	hello() {
		return 'Hello World!';
	}
}
