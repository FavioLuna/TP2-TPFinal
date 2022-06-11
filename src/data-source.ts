import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Liga } from "./entity/Liga"
import { Shirt } from "./entity/Shirt"

export const AppDataSource = new DataSource({
    type: "mongodb",
database: "ProyectoFinalTP2",
    synchronize: true,
    logging: false,
    entities: [User, Liga, Shirt],
    migrations: [],
    subscribers: [],
})
