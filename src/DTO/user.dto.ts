export interface UserDTO extends UserFrontDTO {
  password: string;
}

export interface UserFrontDTO {
  id: string;
  username: string;
  email: string;
  admin: boolean;
}

export interface UserToken {
  token: string;
  user: UserFrontDTO;
}