import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Items } from 'src/typeorm/entities/Items.entities';
import { CreateItemParams, UpdateItemParams } from 'src/utils/Item.type';
import { Repository } from 'typeorm';

@Injectable()
export class ItemsService {
    constructor(@InjectRepository(Items) private ItemRepository:Repository<Items> ){}

    findItem(){
        return this.ItemRepository.find();

    }

    createItem(itemDetails:CreateItemParams){
        const newItem= this.ItemRepository.create({
            ...itemDetails
        });
        return this.ItemRepository.save(newItem);
        }
        
        updateItem(id:number,updaeItemDetails:UpdateItemParams){
            return this.ItemRepository.update({id},{...updaeItemDetails});
        }

}

