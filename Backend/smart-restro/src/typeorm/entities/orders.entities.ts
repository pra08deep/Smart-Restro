import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity({name:'orders'})
export class Order{
    @PrimaryGeneratedColumn()
    id:number;
    
    @Column()
    orderItems:string;

    @Column()
    tableName:string;

    @Column()
    createAt:Date;
    
}
