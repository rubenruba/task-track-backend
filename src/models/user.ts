import { model, Schema } from "mongoose";
import { UserDTO } from "../DTO/user.dto";

const userSchema = new Schema<UserDTO>({
    id: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    admin: { type: Boolean }
}, {
    versionKey: false
});

export const UserModel = model<UserDTO>('User', userSchema);
UserModel.syncIndexes();