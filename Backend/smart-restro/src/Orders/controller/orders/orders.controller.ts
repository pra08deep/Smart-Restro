import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateOrderDto } from 'src/Orders/dtos/CreatOrder.dto';
import { OrdersService } from 'src/orders/service/orders/orders.service';

@Controller('orders')
export class OrdersController {
    constructor(private orderService:OrdersService){}
        @Get()
        getOrder(){
            return this.orderService.findOrder();
        }

        @Post()
        createOrder(@Body() createOrderDto:CreateOrderDto){
                return this.orderService.createOrder(createOrderDto);
        }
    
}
