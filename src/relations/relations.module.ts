import { Module } from '@nestjs/common';
import { RelationsData } from 'src/utils/people.dto';
import { RelationsController } from './relations.controller';
import { RelationsService } from './relations.service';

@Module({
  imports: [RelationsData],
  controllers: [RelationsController],
  providers: [RelationsService],
})
export class RelationsModule {}
