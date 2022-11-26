import { Router } from "express";
import betCreateController from "../controllers/bets/betCreate.controller";

const betRoutes = Router();

betRoutes.post("", betCreateController);
betRoutes.get("/:id");
betRoutes.patch("/:id");
betRoutes.delete("/:id");
betRoutes.patch("/:id/updateResult");

export default betRoutes;
