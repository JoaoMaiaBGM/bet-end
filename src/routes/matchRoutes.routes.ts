import { Router } from "express";
import matchCreateController from "../controllers/matches/matchCreate.controller";
import matchListController from "../controllers/matches/matchList.controller";
import matchUpdateController from "../controllers/matches/matchUpdate.controller";

const matchRoutes = Router();

matchRoutes.post("", matchCreateController);
matchRoutes.get("", matchListController);
matchRoutes.patch("/:id", matchUpdateController);
matchRoutes.delete("/:id");

export default matchRoutes;
