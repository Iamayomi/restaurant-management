import { Response } from "express";
import { StatusCodes as status } from "http-status-codes";
import { CustomRequest, sendError } from "../../../lib";
import { UserService, userService } from "../services";
import { User } from "../schema";

class UserController {
  protected userService: UserService;

  constructor() {
    this.userService = userService;
  }

  public async createUser(req: CustomRequest, res: Response) {
    const { name, email, password, role } = req.body;

    const newUser = await this.userService.register({ name, email, password, role });

    return res.status(status.CREATED).json({
      success: true,
      message: "User created successfully",
      data: { newUser },
    });
  }
}

/** Class containing all User routes handlers */
export const userController = new UserController();
