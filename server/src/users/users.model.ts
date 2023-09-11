import { Model, Column, DataType, Table } from 'sequelize-typescript';

interface UsersCreationAttrs {
  name: string;
  surname: string;
  lastname?: string;
  role: 'admin' | 'curator';
  email: string;
  phone: string;
  telegram: string;
}

@Table({ tableName: 'users' })
export class User extends Model<User, UsersCreationAttrs> {
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
    primaryKey: true,
  })
  id: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  surname: string;
  @Column({
    type: DataType.STRING,
  })
  lastname: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  role: 'admin' | 'curator';
  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  email: string;
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  phone: string;
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  telegram: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;
}
