import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity
} from "typeorm";

@Entity()
class User extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id!: number;

  @Column('varchar', { unique: true, length: 12 })
  username!: string;

  @Column('varchar', { unique: true, length: 320 })
  email!: string;

  @Column('varchar', { length: 72 })
  password!: string;
};

export default User;
