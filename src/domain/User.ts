import { UserDTO, UserFrontDTO } from "../DTO/user.dto";
import { Email } from "../VO/Email";
import { Password } from "../VO/Password";

export class User {
  constructor(
    private _id: string,
    private _username: string,
    private _email: Email,
    private _password: Password,
    private _admin: boolean,
    private _verifyToken?: string,
  ) {}

  get id() {
    return this._id;
  }
  get email() {
    return this._email;
  }
  get username() {
    return this._username;
  }
  get password() {
    return this._password;
  }
  get verifyToken() {
    return this._verifyToken;
  }

  // Setter to update the user in action
  set username(value: string) {
    this._username = value;
  }
  set password(value: Password) {
    this._password = value;
  }

  static fromDTO(dto: UserDTO): User {
    return new User(
      dto.id,
      dto.username,
      new Email(dto.email),
      Password.fromHash(dto.password),
      dto.admin,
      dto.verifyToken,
    );
  }

  toDTO(): UserDTO {
    return {
      id: this._id,
      username: this._username,
      email: this._email.value,
      password: this._password.hash,
      admin: this._admin,
      verifyToken: this._verifyToken,
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

  removeVerifyToken(): void {
    this._verifyToken = undefined;
  }
}
