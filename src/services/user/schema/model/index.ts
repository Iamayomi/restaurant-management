import { DataTypes, Model } from "sequelize";
import sequelize from "../../../../lib/database";
import { UserRoles, user_roles } from "../../../../lib";
import { UserAttributes } from "../interface";

export class User extends Model<UserAttributes> implements UserAttributes {
  public userId!: string;
  public email!: string;
  public name!: string;
  public role!: UserRoles;
}

User.init(
  {
    userId: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM("admin", "staff", "customer"),
      allowNull: false,
      defaultValue: "customer",
    },
  },
  {
    sequelize,
    modelName: "User",
    tableName: "users",
  }
);
