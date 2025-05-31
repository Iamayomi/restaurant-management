import { OrderStatus, TableStatus, UserRoles } from "../types";

export const order_status: OrderStatus[] = ["pending", "preparing", "served", "completed", "cancelled"];

export const table_status: TableStatus[] = ["available", "occupied", "reserved"];

export const user_roles: UserRoles[] = ["admin", "staff", "customer"];
