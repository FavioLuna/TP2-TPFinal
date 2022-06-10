import { Entity, ObjectIdColumn, ObjectID, Column } from "typeorm"

@Entity()
export class Liga {

    @ObjectIdColumn()
    id: ObjectID

    @Column()
    name: string

}
