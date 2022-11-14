import { Router } from "express";

const poolUsersRoutes = Router();

poolUsersRoutes.post("");
poolUsersRoutes.get("/:id");
poolUsersRoutes.delete("/:id");

export default poolUsersRoutes;
