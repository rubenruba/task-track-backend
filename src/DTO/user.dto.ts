export interface UserDTO extends UserFrontDTO {
  password: string;
  verifyToken?: string;
}

export interface UserFrontDTO {
  id: string;
  username: string;
  email: string;
  admin: boolean;
}

export interface DecodedUser {
  user: UserDTO;
  iat: number;
  exp: number;
}

export interface UserEmail {
  userId: string;
  email: string;
}