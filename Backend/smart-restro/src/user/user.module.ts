import { Module } from '@nestjs/common';
import { UsersController} from './controller/users/users.controller';
import { UsersService } from './services/users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User.entities';

@Module({
    imports:[TypeOrmModule.forFeature([User])],
    controllers:[UsersController],
    providers:[UsersService],
})
export class UserModule {}
