import { Router } from "express";
import poolCreateController from "../controllers/pools/poolCreate.controller";
import poolDeleteController from "../controllers/pools/poolDelete.controller";
import poolListController from "../controllers/pools/poolList.controller";
import poolListDataController from "../controllers/pools/poolListData.controller";
import poolUpdateController from "../controllers/pools/poolUpdate.controller";
import tokenAuthMiddleware from "../middlewares/tokenAuth.middleware";

const poolRoutes = Router();

poolRoutes.post("/", tokenAuthMiddleware, poolCreateController);
poolRoutes.get("/", poolListController);
poolRoutes.get("/:id", tokenAuthMiddleware, poolListDataController);
poolRoutes.patch("/:id", tokenAuthMiddleware, poolUpdateController);
poolRoutes.delete("/:id", tokenAuthMiddleware, poolDeleteController);

export default poolRoutes;
