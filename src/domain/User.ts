import { UserDTO, UserFrontDTO } from "../DTO/user.dto";

export class User {
  constructor(
    private _id: string,
    private _username: string,
    private _email: string,
    private _password: string,
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
        dto.email, 
        dto.password, 
        dto.admin
    );
  }

  toDTO(): UserDTO {
    return {
      id: this._id,
      username: this._username,
      email: this._email,
      password: this._password,
      admin: this._admin,
    };
  }

  toFrontDTO(): UserFrontDTO {
    return {
      id: this._id,
      username: this._username,
      email: this._email,
      admin: this._admin,
    };
  }
}
