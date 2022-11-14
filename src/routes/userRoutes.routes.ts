import { Router } from "express";
import userCreateController from "../controllers/user/creatUser.controller";
import userAlreadyExitsUtils from "../utils/user/userAlreadyExits.utils";

const userRoutes = Router();

userRoutes.post("", userCreateController);
userRoutes.get("");
userRoutes.patch("/:id");
userRoutes.delete("/:id");

export default userRoutes;
