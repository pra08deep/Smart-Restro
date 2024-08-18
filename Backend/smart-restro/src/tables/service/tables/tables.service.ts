import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Table } from 'src/typeorm/entities/tables.entities';
import { CreateTableParams } from 'src/utils/Table.type';
import { Repository } from 'typeorm';

@Injectable()
export class TablesService {
    constructor(@InjectRepository(Table) private TableRepository:Repository<Table>){}
    
    findTable(){
        return this.TableRepository.find();
    }

    createTable(tableDetails:CreateTableParams){
        const newTable=this.TableRepository.create({
            ...tableDetails
        });
        return this.TableRepository.save(newTable);
    }
}
