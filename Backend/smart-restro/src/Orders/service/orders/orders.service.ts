import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from 'src/typeorm/entities/orders.entities';
import { CreateOrderParam } from 'src/utils/Order.type';
import { Repository } from 'typeorm';

@Injectable()
export class OrdersService {
    constructor(@InjectRepository(Order) private OrderRepository:Repository<Order> ){}
    findOrder(){
        return this.OrderRepository.find();
    }
    createOrder(orderDetails:CreateOrderParam){
        const newOrder=this.OrderRepository.create({
            ...orderDetails,
            createAt:new Date(),
        });
        return this.OrderRepository.save(newOrder);

    }
}
