import { Column, Entity, JoinColumn, JoinTable, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Items } from "./Items.entities";
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

    @OneToMany(() => Items,Items=>Items.order)
    @JoinColumn({name:'items_id'})
    items:Items[];
    
}
