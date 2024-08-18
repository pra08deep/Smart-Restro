import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

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





}