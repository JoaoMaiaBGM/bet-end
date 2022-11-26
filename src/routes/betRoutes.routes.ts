import { Router } from "express";
import betCreateController from "../controllers/bets/betCreate.controller";
import betDeleteController from "../controllers/bets/betDelete.controller";
import betsListController from "../controllers/bets/betsList.controller";
import betUpdateAdminController from "../controllers/bets/betUpdateAdmin.controller";

const betRoutes = Router();

betRoutes.post("", betCreateController);
betRoutes.get("/:id", betsListController);
betRoutes.patch("/:id", betUpdateAdminController);
betRoutes.patch("/:id/updateResult");
betRoutes.delete("/:id", betDeleteController);

export default betRoutes;
