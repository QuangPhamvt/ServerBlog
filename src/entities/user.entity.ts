import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntityDto } from './types/user.entity.dto';
import { IsEmail, IsJWT, IsNumberString } from 'class-validator';

@Entity('user')
export class User implements UserEntityDto {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({
    name: 'username',
    type: 'varchar',
    length: 50,
    unique: true,
  })
  username: string;

  @Column({
    name: 'mobile',
    type: 'varchar',
    length: '12',
    unique: true,
  })
  @IsNumberString()
  mobile: string;

  @Column({
    name: 'email',
    type: 'varchar',
    length: 30,
    unique: true,
  })
  @IsEmail()
  email: string;

  @Column({
    name: 'password',
    type: 'varchar',
  })
  password: string;

  @Column({
    name: 'registeredAt',
    type: 'date',
  })
  registeredAt: Date;

  @Column({
    name: 'profile',
    type: 'text',
  })
  profile?: string;

  @Column({
    name: 'refreshToken',
    type: 'varchar',
  })
  @IsJWT()
  refreshToken?: string;
}
