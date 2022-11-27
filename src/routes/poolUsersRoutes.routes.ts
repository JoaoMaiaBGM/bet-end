import { Router } from "express";
import poolUserCreateController from "../controllers/poolUsers/poolUserCreate.controller";
import poolUserDeleteController from "../controllers/poolUsers/poolUserDelete.controller";
import poolUsersListController from "../controllers/poolUsers/poolUsersList.controller";
import tokenAuthMiddleware from "../middlewares/tokenAuth.middleware";

const poolUsersRoutes = Router();

poolUsersRoutes.post("", tokenAuthMiddleware, poolUserCreateController);
poolUsersRoutes.get("/:id", poolUsersListController);
poolUsersRoutes.delete("/:id", tokenAuthMiddleware, poolUserDeleteController);

export default poolUsersRoutes;
