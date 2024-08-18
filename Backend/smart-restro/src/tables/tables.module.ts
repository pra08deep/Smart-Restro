import { Module } from '@nestjs/common';
import { TablesController } from './controller/tables/tables.controller';
import { TablesService } from './service/tables/tables.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Table } from 'src/typeorm/entities/tables.entities';

@Module({
  imports:[TypeOrmModule.forFeature([Table])],
  controllers: [TablesController],
  providers: [TablesService]
})
export class TablesModule {}
