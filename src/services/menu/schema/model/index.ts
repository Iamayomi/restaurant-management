import { DataTypes, Model } from "sequelize";
import sequelize from "../../../../lib/database";
import { MenuItemAttributes } from "../interfaces";

export class MenuItem extends Model<MenuItemAttributes> implements MenuItemAttributes {
  public id!: number;
  public name!: string;
  public description!: string;
  public price!: number;
  public category!: string;
  public ingredients!: string[];
}

MenuItem.init(
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
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ingredients: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "MenuItem",
    tableName: "menu_items",
  }
);
