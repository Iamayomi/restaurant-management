import { Request, Response, NextFunction } from "express";
import { CustomRequest, sendError, verifyAuthorization } from "../../lib";
import { User } from "../../services/user";

export const authenticate = async (req: CustomRequest, _: Response, next: NextFunction) => {
  const { data, error } = verifyAuthorization(req);

  if (error) sendError.unauthorizationError(error);

  const { userId } = data;

  const user = await User.findOne({ where: { userId } });

  if (!user) sendError.unauthorizationError();

  // Populate req.user
  req.user = {
    ...data,
  };

  next();
};
