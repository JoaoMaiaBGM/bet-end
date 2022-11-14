import { isAdmUser } from "./../middlewares/isUserAdm.middleware";
import { Router } from "express";
import userCreateController from "../controllers/user/creatUser.controller";
import tokenAuthMiddleware from "../middlewares/tokenAuth.middleware";
import userListController from "../controllers/user/userList.controller";
import userDeleteController from "../controllers/user/userDelete.controller";
import userUpdateController from "../controllers/user/userUpdate.controller";
import verifyUpdateFieldsUtils from "../utils/user/verifyUpdateFields.utils";
import userUpdatePasswordUtils from "../utils/user/userUpdatePassword.utils";

const userRoutes = Router();

userRoutes.post("", userCreateController);
userRoutes.get("", tokenAuthMiddleware, isAdmUser, userListController);
userRoutes.patch(
  "/:id",
  tokenAuthMiddleware,
  verifyUpdateFieldsUtils,
  userUpdatePasswordUtils,
  userUpdateController
);
userRoutes.delete("/:id", tokenAuthMiddleware, userDeleteController);

export default userRoutes;
