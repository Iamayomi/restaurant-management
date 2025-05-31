import { UserRoles } from "../../../../lib";

export interface UserAttributes {
  userId: string;
  email: string;
  name: string;
  role: UserRoles;
}
