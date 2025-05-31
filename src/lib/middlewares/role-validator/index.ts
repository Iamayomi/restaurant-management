import { NextFunction } from "express";
import { CustomRequest, UserRoles, sendError } from "../..";

export const validateRoles = (...allowedRoles: UserRoles[]) => {
  return (req: CustomRequest, _: Response, next: NextFunction) => {
    if (!req.user || !req.user.role || !allowedRoles.includes(req.user.role)) {
      sendError.unauthorizationError("You do not have permission to perform this action");
    }
    next();
  };
};
