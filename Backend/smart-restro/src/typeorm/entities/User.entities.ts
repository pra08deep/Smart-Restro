import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'users'})
export class User{
@PrimaryGeneratedColumn()
id:number;

@Column({unique:true})
username:string;

@Column( )
password:string;

@Column( )
createdAt:Date;

@Column({nullable:true})
authstrategy:string;



}