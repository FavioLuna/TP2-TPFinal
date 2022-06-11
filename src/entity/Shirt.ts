import { Entity, ObjectIdColumn, ObjectID, Column } from "typeorm"
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
    year: number;

    @Column()
    size: SIZE;

    @Column()
    number: number;

    @Column()
    name: string;

    @Column()
    original: boolean;

    @Column()
    description: string;

    @Column()
    league: Liga;

    @Column()
    team: Team;
    
        
    
}