import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { RoleEntityDto, RoleEnum } from './types/role.entity.dto';
import { User } from './user.entity';
import { Permission } from './permission.entity';

@Entity('role')
export class Role implements RoleEntityDto {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  role: RoleEnum;

  @OneToOne(() => User, (user) => user.id)
  @JoinColumn({
    name: 'user_id',
    referencedColumnName: 'id',
    foreignKeyConstraintName: 'fk_user_role',
  })
  user: User;

  @ManyToMany(() => Permission, (permission) => permission.roles)
  @JoinTable({
    name: 'role_permission',
    joinColumn: {
      name: 'role_id',
      referencedColumnName: 'id',
      foreignKeyConstraintName: 'fk_role_permission_role_id',
    },
    inverseJoinColumn: {
      name: 'permission_id',
      referencedColumnName: 'id',
      foreignKeyConstraintName: 'fk_role_permission_permission_id',
    },
  })
  permissions: Permission[];
}
