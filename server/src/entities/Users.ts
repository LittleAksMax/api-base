import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity
} from "typeorm";

@Entity()
class Users extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true, length: 12 })
  username!: string;

  @Column({ unique: true, length: 320 })
  email!: string;

  @Column({ length: 72 })
  password!: string;
};

export default Users;
