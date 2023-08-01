import { User } from '../user.entity';

export enum RoleEnum {
  Admin = 'admin',
  User = 'user',
}
export interface RoleEntityDto {
  id: number;
  role: RoleEnum;
  user: User;
}
