import { Entity, ObjectIdColumn, Column } from "typeorm"
import {IsInt,  Min, Max, IsEnum, IsNotEmpty} from "class-validator";
import { Liga } from "./Liga";
import { Team } from "./Team";

enum SIZE{
    S = "S",
    M = "M",
    XL = "XL"
}

@Entity()
export class Shirt{

    @ObjectIdColumn()
    id: number;

    @Column()
    @IsInt()
    @Min(1910)
    @Max(2022)
    @IsNotEmpty()
    year: number;

    @Column()
    size: SIZE;

    
    @Column()
    @IsInt()
    @Min(1)
    @Max(99)
    number: number;

    @Column()
    name: string;

    @Column()
    @IsNotEmpty()
    original: boolean;

    @Column()
    description: string;

    @Column()
    @IsNotEmpty()
    league: Liga;

    @Column()
    @IsNotEmpty()
    team: Team;
    
        
    
}