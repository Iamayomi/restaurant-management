import { Request, Response, NextFunction } from "express";
import { CustomRequest, UserRoles, sendError, verifyAuthorization } from "../../../lib";
import { User } from "../../../services/user";

export const authenticate = async (req: CustomRequest, _: Response, next: NextFunction) => {
  const { data, error } = verifyAuthorization(req);

  if (error) sendError.unauthorizationError(error);

  const { userId, email, name } = data;

  // Check for role in custom claims
  const role = data.role as UserRoles | undefined;

  // Fallback to database if no role in custom claims
  let user: any = await User.findOne({ where: { userId } });

  if (!user && role) {
    // Create user in database if they don't exist but have a valid role in custom claims
    user = await User.create({
      userId,
      email,
      name,
      role: role || "customer",
    });
  } else if (!user) {
    sendError.unauthorizationError("User not found and no role assigned in token");
  }

  req.user = {
    userId: userId,
    email: email,
    name: name,
    role: role || user.role,
  };

  next();
};
