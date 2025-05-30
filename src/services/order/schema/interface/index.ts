export interface OrderAttributes {
  id: number;
  //   tableId: number;
  items: { menuItemId: number; quantity: number }[];
  status: "pending" | "preparing" | "served" | "completed" | "cancelled";
  total: number;
  createdAt?: Date;
  updatedAt?: Date;
}
