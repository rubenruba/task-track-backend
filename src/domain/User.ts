import { UserDTO, UserFrontDTO } from "../DTO/user.dto";
import { Email } from "../VO/Email";
import { Password } from "../VO/Password";

export class User {
  constructor(
    private _id: string,
    private _username: string,
    private _email: Email,
    private _password: Password,
    private _admin: boolean
  ) {}

  get id() {
    return this._id;
  }
  get email() {
    return this._email;
  }

  static fromDTO(dto: UserDTO): User {
    return new User(
        dto.id, 
        dto.username, 
        new Email(dto.email), 
        Password.fromHash(dto.password), 
        dto.admin
    );
  }

  toDTO(): UserDTO {
    return {
      id: this._id,
      username: this._username,
      email: this._email.value,
      password: this._password.hash,
      admin: this._admin,
    };
  }

  toFrontDTO(): UserFrontDTO {
    return {
      id: this._id,
      username: this._username,
      email: this._email.value,
      admin: this._admin,
    };
  }
}
