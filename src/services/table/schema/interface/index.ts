import { TableStatus } from "lib";

export interface TableAttributes {
  id: number;

  number: number;

  capacity: number;

  status: TableStatus;
}
