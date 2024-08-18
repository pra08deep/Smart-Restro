import { Body, Controller, Get, Post } from '@nestjs/common';

import { CreateTableDto } from 'src/tables/dtos/CreateTable.dto';
import { TablesService } from 'src/tables/service/tables/tables.service';

@Controller('tables')
export class TablesController {

    constructor(private tableservice:TablesService){}
    
    @Get()
    getTable(){
        return this.tableservice.findTable();
    }

    @Post()
    createTable(@Body() createTableDto:CreateTableDto){
        return this.tableservice.createTable(createTableDto);
    }

}
