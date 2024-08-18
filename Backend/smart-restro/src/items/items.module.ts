import { Module } from '@nestjs/common';
import { ItemsService } from './service/items/items.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Items } from 'src/typeorm/entities/Items.entities';
import { ItemsController } from './controller/items/items.controller';

@Module({
  imports:[TypeOrmModule.forFeature([Items])],
  controllers:[ItemsController],
  providers: [ItemsService]
})
export class ItemsModule {}
