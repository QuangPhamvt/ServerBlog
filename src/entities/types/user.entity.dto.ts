export interface UserEntityDto {
  id: number;
  username: string;
  mobile: string;
  email: string;
  password: string;
  registeredAt: Date;
  profile?: string;
  refreshToken?: string;
}
