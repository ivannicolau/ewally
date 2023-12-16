import { PersonModule } from '../person/person.module';
import { RelationsModule } from '../relations/relations.module';
import { RelationsService } from '../relations/relations.service';
import { RelationsController } from '../relations/relations.controller';
import { PersonController } from '../person/person.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { RelationsData } from 'src/utils/people.dto';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    RelationsModule,
    PersonModule,
    RelationsData,
  ],
  controllers: [RelationsController, PersonController, AppController],
  providers: [RelationsService, AppService],
})
export class AppModule {}
