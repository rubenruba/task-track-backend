import { CreateUserController } from "./createUser.controller";
import { DeleteController } from "./deleteUser.controller";
import { LoginController } from "./login.controller";

export const createUserController = new CreateUserController();
export const loginController = new LoginController();
export const deleteController = new DeleteController();