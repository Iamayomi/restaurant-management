import { UserRoles } from "../../../../lib";

export interface UserAttributes {
  /** user Id */
  userId: string;

  /** user email */
  email: string;

  /** user name */
  name: string;

  /** user role */
  role: UserRoles;

  /** user password */
  password: string;
}
