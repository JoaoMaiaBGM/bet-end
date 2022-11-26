import { instanceToInstance } from "class-transformer";
import { Request, Response } from "express";
import poolUsersListService from "../../services/poolUsers/poolUsersList.service";

const poolUsersListController = async (req: Request, res: Response) => {
  const idPool: string = req.params.id;
  const listUser = await poolUsersListService(idPool);
  res.json(instanceToInstance(listUser));
};

export default poolUsersListController;
