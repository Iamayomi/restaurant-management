import { Table, Column, Model, DataType, PrimaryKey, BeforeCreate, BeforeUpdate } from "sequelize-typescript";
import * as argon2 from "argon2";
import { UserRoles } from "../../../../lib";
import { UserAttributes } from "../interface";

@Table({ tableName: "users", modelName: "User", timestamps: true })
export class User extends Model<UserAttributes> implements UserAttributes {
  @PrimaryKey
  @Column({ type: DataType.STRING })
  userId!: string;

  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  email!: string;

  @Column({ type: DataType.STRING, allowNull: false })
  name!: string;

  @Column({
    type: DataType.ENUM("admin", "staff", "customer"),
    allowNull: false,
    defaultValue: "customer",
  })
  role!: UserRoles;

  @Column({ type: DataType.STRING, allowNull: false })
  password!: string;

  // Password check method
  public async isValidPassword(rawPassword: string): Promise<boolean> {
    return await argon2.verify(this.password, rawPassword);
  }

  // Hash password before create/update
  @BeforeCreate
  @BeforeUpdate
  static async hashPassword(instance: User) {
    if (instance.changed("password")) {
      instance.password = await argon2.hash(instance.password);
    }
  }
}
