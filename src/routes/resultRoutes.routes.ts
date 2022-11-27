import { Router } from "express";
import betUpdateResultController from "../controllers/bets/betUpdateResult.controller";
import { isAdmUser } from "../middlewares/isUserAdm.middleware";
import tokenAuthMiddleware from "../middlewares/tokenAuth.middleware";

const resultRoutes = Router();

resultRoutes.patch(
  "/:id",
  tokenAuthMiddleware,
  isAdmUser,
  betUpdateResultController
);

export default resultRoutes;
