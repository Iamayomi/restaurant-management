import { NextFunction, Request, Response } from "express";
import { AnyZodObject, ZodEffects } from "zod";

import { CustomRequest, sendError } from "../lib";

/**
 * This middleware validates ***request body*** (ie payload) against the provided *Zod* ***AnyZodObject*** representing the required payload structure and types. If `payload` passes validation, its validated values are then spread into `req.body` after which control is passed to the respective `controller` or `handler` from where these sanitized/validated request `payload` can be accessed for further operations.
 * @param {AnyZodObject} schema
 */
export const validateRequest =
  (schema: AnyZodObject | ZodEffects<AnyZodObject>) =>
  async (req: Request, _: Response, next: NextFunction): Promise<void> => {
    const payload = req.body;

    const { error, data } = await schema.parseAsync(payload);

    if (error) sendError.BadRequestError(error.message);

    req.body = { ...payload, ...data };
    next();
  };
// /**
//  * This middleware validates ***request body*** (ie payload) against the provided *Joi* ***ObjectSchema*** representing the required payload structure and types. If `payload` passes validation, its validated values are then spread into `req.body` after which control is passed to the respective `controller` or `handler` from where these sanitized/validated request `payload` can be accessed for further operations.
//  * @param {ObjectSchema} fieldsSchema
//  */
// export const validate = (fieldsSchema: ObjectSchema) => (req: CustomRequest, _: Response, next: NextFunction) => {
//   let payload = req.body;

//   const { error, value } = fieldsSchema.validate(payload);

//   if (error) sendError.BadRequestError(error.message);

//   req.body = { ...payload, ...value };

//   next();
// };
