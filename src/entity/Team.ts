import { Entity, ObjectIdColumn, ObjectID, Column } from "typeorm"
import {IsNotEmpty} from "class-validator"

@Entity()
export class Team{
    
    @ObjectIdColumn()
    id: ObjectID

    @Column()
    @IsNotEmpty()
    name: string


    @Column()
    @IsNotEmpty()
    img: string

}