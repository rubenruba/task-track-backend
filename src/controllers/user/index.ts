import { ConfirmEmailController } from "./confirmEmail.controller";
import { CreateUserController } from "./createUser.controller";
import { DeleteController } from "./deleteUser.controller";
import { LoginController } from "./login.controller";
import { ResetPasswordController } from "./resetPassword.controller";
import { UpdateUserController } from "./updateUser.controller";

export const createUserController = new CreateUserController();
export const confirmEmailController = new ConfirmEmailController();
export const loginController = new LoginController();
export const deleteController = new DeleteController();
export const updateUserController = new UpdateUserController();
export const resetPasswordController = new ResetPasswordController();