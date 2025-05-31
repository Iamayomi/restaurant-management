import { Router } from "express";
import { UserRoutes } from "../services/user";

const router = Router();
const serviceRoutes = [
  {
    path: "/users",
    route: UserRoutes,
  },
];

serviceRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
