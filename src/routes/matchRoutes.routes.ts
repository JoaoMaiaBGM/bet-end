import { Router } from "express";
import matchCreateController from "../controllers/matches/matchCreate.controller";

const matchRoutes = Router();

matchRoutes.post("", matchCreateController);
matchRoutes.get("");
matchRoutes.patch("/:id");
matchRoutes.delete("/:id");

export default matchRoutes;
