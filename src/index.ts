import { AppDataSource } from "./data-source"
import { Shirt } from "./entity/Shirt"
import { User } from "./entity/User"
import {validate} from "class-validator";

AppDataSource.initialize().then(async () => {

    console.log("Inserting a new user into the database...")
    const user = new User()
    user.firstName = "Timber"
    user.email = "timber@hotm.com"
    user.password = "test"

    const shirt = new Shirt()
    shirt.description = "esta es una descripcion de prueba"
    shirt.name = "Rooney"
    shirt.number = 200
    shirt.original = false
    shirt.size = null
    shirt.year = 1810
    
    const errors = await validate(shirt);
    if (errors.length > 0) {
        throw new Error(`Validation failed!`); 
    } else {
        await AppDataSource.manager.save(shirt)
    }
    await AppDataSource.manager.save(user)
    
    console.log("Saved a new user with id: " + user.id)
    console.log("Saved a new user with id: " + shirt.id)

    console.log("Loading users from the database...")
    const users = await AppDataSource.manager.find(User)
    const shirts = await AppDataSource.manager.find(Shirt)
    console.log("Loaded users: ", users)
    console.log("Loaded users: ", shirts)

    console.log("Here you can setup and run express / fastify / any other framework.")

}).catch(error => console.log(error))
