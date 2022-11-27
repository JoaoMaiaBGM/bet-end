import { Router } from "express";
import poolMatchCreateController from "../controllers/poolMatches/poolMatchCreate.controller";
import poolMatchDeleteController from "../controllers/poolMatches/poolMatchDelete.controller";
import poolMatchesListController from "../controllers/poolMatches/poolMatchesList.controller";
import tokenAuthMiddleware from "../middlewares/tokenAuth.middleware";

const poolMatchesRoutes = Router();

poolMatchesRoutes.post("", tokenAuthMiddleware, poolMatchCreateController);
poolMatchesRoutes.get("/:id", poolMatchesListController);
poolMatchesRoutes.delete(
  "/:id",
  tokenAuthMiddleware,
  poolMatchDeleteController
);

export default poolMatchesRoutes;
