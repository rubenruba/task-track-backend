export interface UserDTO extends UserFrontDTO {
  password: string;
}

export interface UserFrontDTO {
  id: string;
  username: string;
  email: string;
  admin: boolean;
}