import { Router } from "express";
import betCreateController from "../controllers/bets/betCreate.controller";
import betsListController from "../controllers/bets/betsList.controller";
import betUpdateAdminController from "../controllers/bets/betUpdateAdmin.controller";

const betRoutes = Router();

betRoutes.post("", betCreateController);
betRoutes.get("/:id", betsListController);
betRoutes.patch("/:id", betUpdateAdminController);
betRoutes.delete("/:id");
betRoutes.patch("/:id/updateResult");

export default betRoutes;
