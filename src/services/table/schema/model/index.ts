import { DataTypes, Model } from "sequelize";
import { TableAttributes } from "../interface";
import sequelize from "../../../../lib/database";

class Table extends Model<TableAttributes> implements TableAttributes {
  public id!: number;
  public number!: number;
  public capacity!: number;
  public status!: "available" | "occupied" | "reserved";
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
      type: DataTypes.ENUM("available", "occupied", "reserved"),
      defaultValue: "available",
    },
  },
  {
    sequelize,
    modelName: "Table",
    tableName: "tables",
  }
);

export default Table;
