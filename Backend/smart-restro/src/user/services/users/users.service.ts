import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User.entities';
import { CreateUserParams, UpdateUserParams } from 'src/utils/User.type';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor (@InjectRepository(User) private  UserRepository:Repository<User>){}

    findUser(){
        return this.UserRepository.find();
    }

    createUser(userDetails:CreateUserParams){
        const newUser= this.UserRepository.create({
            ...userDetails,
            createdAt:new Date(),
        });
        return this.UserRepository.save(newUser);
    }

    updateUser(id:number,updateUserDetails:UpdateUserParams){
        return this.UserRepository.update({id},{...updateUserDetails});

    }

    deleteUser(id:number){
        return this.UserRepository.delete({id});
    }
}
