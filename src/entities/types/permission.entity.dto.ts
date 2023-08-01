import { Role } from '../role.entity';

export interface PermissionEntityDto {
  id: number;
  action: string;
  roles: Role[];
}
