import { OrderStatus } from "../../../../lib";

export interface OrderAttributes {
  id: number;

  tableId: number;

  items: { menuItemId: number; quantity: number }[];

  status: OrderStatus;

  total: number;

  createdAt?: Date;

  updatedAt?: Date;
}
