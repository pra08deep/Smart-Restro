import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CreateUserDto } from 'src/user/dtos/CreateUser.dto';
import { UpdateUserDto } from 'src/user/dtos/UpdateUser.dto';
import { UsersService } from 'src/user/services/users/users.service';

@Controller('users')
export class UsersController {
    constructor(private userService:UsersService){}
    @Get()
    getUser(){
        return this.userService.findUser();
    }

    @Post()
    createUser(@Body() createUserDto:CreateUserDto){
     return this.userService.createUser(createUserDto);
    }

    @Put(':id')
    async updateUserById(
        @Param('id',ParseIntPipe)id:number,
        @Body() updateUserById:UpdateUserDto,
){
    await this.userService.updateUser(id,updateUserById);
}

@Delete(':id')
async deleteUserById(
    @Param('id',ParseIntPipe)id:number){
await this.userService.deleteUser(id);
}


}
