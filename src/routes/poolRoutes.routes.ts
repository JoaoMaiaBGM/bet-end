import { Router } from "express";
import poolCreateController from "../controllers/pools/poolCreate.controller";
import poolDeleteController from "../controllers/pools/poolDelete.controller";
import poolListController from "../controllers/pools/poolList.controller";
import poolListDataController from "../controllers/pools/poolListData.controller";
import poolUpdateController from "../controllers/pools/poolUpdate.controller";

const poolRoutes = Router();

poolRoutes.post("/", poolCreateController);
poolRoutes.get("/", poolListController);
poolRoutes.get("/:id", poolListDataController);
poolRoutes.patch("/:id", poolUpdateController);
poolRoutes.delete("/:id", poolDeleteController);

export default poolRoutes;
