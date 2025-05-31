import { sendError } from "../../../lib";
import { User } from "../schema";

export class UserService {
  constructor(private userModel = User) {}

  public async register(data: any): Promise<User> {
    const userExist = await this.findUserByEmail(data.email);

    if (userExist) {
      sendError.duplicateRequestError("Email already in use, try another one.");
    }
    const user = await User.create(data);

    return user;
  }

  public async findUserByEmail(email: string): Promise<User | null> {
    return await User.findOne({ where: { email } });
  }

  public async findUserById(userId: string): Promise<User | null> {
    return await User.findOne({ where: { userId } });
  }
}

/**
 * Instance of the UserService class used to handle user-related database queries
 * @instance {UserService} */
export const userService = new UserService();
