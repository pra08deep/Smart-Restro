import { Body, Controller,Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CreateItemDto } from 'src/items/dtos/CreateItem.dto';
import { UpdateItemDto } from 'src/items/dtos/UpdateItem.dto';
import { ItemsService } from 'src/items/service/items/items.service';

@Controller('items')
export class ItemsController {

    constructor(private itemservice:ItemsService){}

        @Get()
        getItem(){ 
            return this.itemservice.findItem();
        }

        @Post()
        createItem(@Body() createItemDto:CreateItemDto){
            return this.itemservice.createItem(createItemDto);
        }

        @Put(':id')
        async updateItemById(
            @Param('id',ParseIntPipe)id:number,
            @Body() updateItemById:UpdateItemDto,
            ){
               await this.itemservice.updateItem(id,updateItemById);    
            }


}
