import { Module } from '@nestjs/common';
import { OrdersController } from './controller/orders/orders.controller';
import { OrdersService } from './service/orders/orders.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from 'src/typeorm/entities/orders.entities';


@Module({
  imports:[TypeOrmModule.forFeature([Order])],
  controllers: [OrdersController],
  providers: [OrdersService]
})
export class OrdersModule {}
