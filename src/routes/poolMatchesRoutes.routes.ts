import { Router } from "express";
import poolMatchCreateController from "../controllers/poolMatches/poolMatchCreate.controller";
import poolMatchDeleteController from "../controllers/poolMatches/poolMatchDelete.controller";
import poolMatchesListController from "../controllers/poolMatches/poolMatchesList.controller";

const poolMatchesRoutes = Router();

poolMatchesRoutes.post("", poolMatchCreateController);
poolMatchesRoutes.get("/:id", poolMatchesListController);
poolMatchesRoutes.delete("/:id", poolMatchDeleteController);

export default poolMatchesRoutes;
