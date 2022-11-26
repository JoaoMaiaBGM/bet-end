import { Router } from "express";
import poolCreateController from "../controllers/pools/poolCreate.controller";
import poolListController from "../controllers/pools/poolList.controller";
import poolUpdateController from "../controllers/pools/poolUpdate.controller";

const poolRoutes = Router();

poolRoutes.post("/", poolCreateController);
poolRoutes.get("/", poolListController);
poolRoutes.patch("/:id", poolUpdateController);
poolRoutes.delete("/:id");
poolRoutes.get("/:id");

export default poolRoutes;
