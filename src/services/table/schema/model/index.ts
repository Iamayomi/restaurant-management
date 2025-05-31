import { DataTypes, Model } from "sequelize";
import { TableAttributes } from "../interface";
import sequelize from "../../../../lib/database";
import { TableStatus, table_status } from "../../../../lib";

export class Table extends Model<TableAttributes> implements TableAttributes {
  public id!: number;

  public number!: number;

  public capacity!: number;

  public status!: TableStatus;
}

Table.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    number: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
    capacity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM(...table_status),
      defaultValue: "available",
    },
  },
  {
    sequelize,
    modelName: "Table",
    tableName: "tables",
  }
);
