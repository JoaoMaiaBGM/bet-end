import { Router } from "express";

const poolMatchesRoutes = Router();

poolMatchesRoutes.post("");
poolMatchesRoutes.get("/:id");
poolMatchesRoutes.delete("/:id");

export default poolMatchesRoutes;
