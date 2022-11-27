import { Router } from "express";
import betCreateController from "../controllers/bets/betCreate.controller";
import betDeleteController from "../controllers/bets/betDelete.controller";
import betsListController from "../controllers/bets/betsList.controller";
import betUpdateAdminController from "../controllers/bets/betUpdateAdmin.controller";
import betUpdateResultController from "../controllers/bets/betUpdateResult.controller";
import tokenAuthMiddleware from "../middlewares/tokenAuth.middleware";

const betRoutes = Router();

betRoutes.post("", tokenAuthMiddleware, betCreateController);
betRoutes.get("/:id", tokenAuthMiddleware, betsListController);
betRoutes.patch("/:id", tokenAuthMiddleware, betUpdateAdminController);
betRoutes.patch(
  "/:id/updateResult",
  tokenAuthMiddleware,
  betUpdateResultController
);
betRoutes.delete("/:id", tokenAuthMiddleware, betDeleteController);

export default betRoutes;
