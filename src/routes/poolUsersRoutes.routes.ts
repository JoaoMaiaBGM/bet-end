import { Router } from "express";
import poolUserCreateController from "../controllers/poolUsers/poolUserCreate.controller";
import poolUserDeleteController from "../controllers/poolUsers/poolUserDelete.controller";
import poolUsersListController from "../controllers/poolUsers/poolUsersList.controller";

const poolUsersRoutes = Router();

poolUsersRoutes.post("", poolUserCreateController);
poolUsersRoutes.get("/:id", poolUsersListController);
poolUsersRoutes.delete("/:id", poolUserDeleteController);

export default poolUsersRoutes;
