import { Router } from "express";
import poolUserCreateController from "../controllers/poolUsers/poolUserCreate.controller";
import poolUsersListController from "../controllers/poolUsers/poolUsersList.controller";

const poolUsersRoutes = Router();

poolUsersRoutes.post("", poolUserCreateController);
poolUsersRoutes.get("/:id", poolUsersListController);
poolUsersRoutes.delete("/:id");

export default poolUsersRoutes;
