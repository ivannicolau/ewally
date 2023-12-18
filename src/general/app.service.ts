import { Injectable } from '@nestjs/common';
import { people } from './app.module';

@Injectable()
export class AppService {
	private readonly relations = people;
	eraseAll() {
		this.relations.eraseAll();
	}
}
