import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'tables'})
export class Table{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    tablename:string;

    @Column()
    place:string;

}