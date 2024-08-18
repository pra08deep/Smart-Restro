import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './typeorm/entities/User.entities';
import { UserModule } from './user/user.module';
import { Items } from './typeorm/entities/Items.entities';
import { ItemsModule } from './items/items.module';
import { TablesModule } from './tables/tables.module';
import { Table } from './typeorm/entities/tables.entities';
import { OrdersModule } from './orders/orders.module';
import { Order } from './typeorm/entities/orders.entities';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'smartrestro',
      entities: [User,Items,Table,Order],
      synchronize: true,
    }),
    UserModule,
    ItemsModule,
    TablesModule,
    OrdersModule,

  ],
  
 
})
export class AppModule {}
