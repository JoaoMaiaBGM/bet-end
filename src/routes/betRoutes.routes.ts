import { Router } from "express";

const betRoutes = Router();

betRoutes.post("/");
betRoutes.get("/:id");
betRoutes.patch("/:id");
betRoutes.delete("/:id");
betRoutes.patch("/:id/updateResult");

export default betRoutes;
