import { ListMongoRepository } from "./list/listMongo.repository";
import { TaskMongoRepository } from "./task/taskMongo.repository";
import { UserMongoRepository } from "./user/userMongo.repository";

export const userMongoRepository = new UserMongoRepository();
export const taskMongoRepository = new TaskMongoRepository();
export const listMongoRepository = new ListMongoRepository();