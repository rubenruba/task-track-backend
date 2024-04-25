import { TaskMongoRepository } from "./task/taskMongo.repository";
import { UserMongoRepository } from "./user/userMongo.repository";

export const userMongoRepository = new UserMongoRepository();
export const taskMongoRepository = new TaskMongoRepository();