import { Router } from "express";

const matchRoutes = Router();

matchRoutes.post("");
matchRoutes.get("");
matchRoutes.patch("/:id");
matchRoutes.delete("/:id");

export default matchRoutes;
