import { Column, Entity, ManyToMany, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Order } from "./orders.entities";

@Entity({name:'items'})
export class Items{
@PrimaryGeneratedColumn()
id:number;

@Column({unique:true})
foodName:string;

@Column( )
description:string;

@Column( )
type:string;

@Column()
price:number;

@Column()
division:string;

@Column()
catagories:string;

@ManyToOne(()=>Order,(order)=>order.items)
order:Order;





}