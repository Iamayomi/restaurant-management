import { DataTypes, Model } from "sequelize";
import { OrderAttributes } from "../interface";
import sequelize from "../../../../lib/database";

import { OrderStatus, order_status } from "../../../../lib";
import { Table } from "../../../table";
import { MenuItem } from "../../../menu";

export class Order extends Model<OrderAttributes> implements OrderAttributes {
  public id!: number;
  public tableId!: number;
  public items!: { menuItemId: number; quantity: number }[];
  public status!: OrderStatus;
  public total!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Order.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    tableId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: Table, key: "id" },
    },

    items: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM(...order_status),
      defaultValue: "pending",
    },
    total: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Order",
    tableName: "orders",
  }
);

Order.belongsTo(Table, { foreignKey: "tableId" });
Order.belongsToMany(MenuItem, { through: "OrderItems" });
