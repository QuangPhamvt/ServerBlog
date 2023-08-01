import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { PermissionEntityDto } from './types/permission.entity.dto';
import { Role } from './role.entity';

@Entity('permission')
export class Permission implements PermissionEntityDto {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({
    name: 'action',
    type: 'varchar',
  })
  action: string;

  @ManyToMany(() => Role, (role) => role.permissions)
  roles: Role[];
}
