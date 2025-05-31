import { Request } from "express";

export interface CustomRequest extends Request {
  user?: {
    userId: string;
    email?: string;
    name?: string;
    role?: UserRoles;
  };
}

export type LogStatus = "INFO" | "WARN" | "ERROR" | "SUCCESS" | "DEBUG";

export type OrderStatus = "pending" | "preparing" | "served" | "completed" | "cancelled";

export type TableStatus = "available" | "occupied" | "reserved";

export type UserRoles = "admin" | "staff" | "customer";

export type ErrorData = Record<string, any>;
