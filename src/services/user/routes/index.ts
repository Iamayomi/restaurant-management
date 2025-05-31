import { Router } from "express";
import * as _ from "../schema-validate";
import { userController } from "../controller";
import { validateRequest } from "../../../lib";

const router = Router();

router.post("/sign-up", userController.createUser);
// router.get("/:uid", authenticate, userController.getUser);

export const UserRoutes = router;
