import { Router } from "express";
import poolUserCreateController from "../controllers/poolUsers/poolUserCreate.controller";

const poolUsersRoutes = Router();

poolUsersRoutes.post("", poolUserCreateController);
poolUsersRoutes.get("/:id");
poolUsersRoutes.delete("/:id");

export default poolUsersRoutes;
