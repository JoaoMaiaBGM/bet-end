import { isAdmUser } from "./../middlewares/isUserAdm.middleware";
import { Router } from "express";
import matchCreateController from "../controllers/matches/matchCreate.controller";
import matchDeleteController from "../controllers/matches/matchDelete.controller";
import matchListController from "../controllers/matches/matchList.controller";
import matchUpdateController from "../controllers/matches/matchUpdate.controller";
import tokenAuthMiddleware from "../middlewares/tokenAuth.middleware";

const matchRoutes = Router();

matchRoutes.post("", tokenAuthMiddleware, isAdmUser, matchCreateController);
matchRoutes.get("", matchListController);
matchRoutes.patch(
  "/:id",
  tokenAuthMiddleware,
  isAdmUser,
  matchUpdateController
);
matchRoutes.delete(
  "/:id",
  tokenAuthMiddleware,
  isAdmUser,
  matchDeleteController
);

export default matchRoutes;
