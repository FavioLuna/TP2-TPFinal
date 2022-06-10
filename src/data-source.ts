import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Liga } from "./entity/Liga"

export const AppDataSource = new DataSource({
    type: "mongodb",
database: "test",
    synchronize: true,
    logging: false,
    entities: [User, Liga],
    migrations: [],
    subscribers: [],
})
