export interface TableAttributes {
  id: number;
  number: number;
  capacity: number;
  status: "available" | "occupied" | "reserved";
}
