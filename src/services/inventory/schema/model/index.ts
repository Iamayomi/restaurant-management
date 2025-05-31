import { DataTypes, Model } from "sequelize";
import sequelize from "../../../../lib/database";
import { InventoryAttributes } from "../interface";

export class Inventory extends Model<InventoryAttributes> implements InventoryAttributes {
  public id!: number;
  public name!: string;
  public quantity!: number;
  public unit!: string;
  public lowStockThreshold!: number;
}

Inventory.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    unit: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lowStockThreshold: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Inventory",
    tableName: "inventory",
  }
);
