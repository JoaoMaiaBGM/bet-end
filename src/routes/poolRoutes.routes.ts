import { Router } from "express";
import poolCreateController from "../controllers/pools/poolCreate.controller";
import poolListController from "../controllers/pools/poolList.controller";

const poolRoutes = Router();

poolRoutes.post("/", poolCreateController);
poolRoutes.get("/", poolListController);
poolRoutes.patch("/:id");
poolRoutes.delete("/:id");
poolRoutes.get("/:id");

export default poolRoutes;
