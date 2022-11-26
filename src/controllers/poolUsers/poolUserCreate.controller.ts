import { instanceToInstance } from "class-transformer";
import { Request, Response } from "express";
import { IPoolUsers } from "../../interfaces/poolUsers";
import poolUserCreateService from "../../services/poolUsers/poolUserCreate.service";

const poolUserCreateController = async (req: Request, res: Response) => {
  const idOwner: string = req.user.id!;
  const poolUsers: IPoolUsers = req.body;
  const createPoolUsers = await poolUserCreateService(poolUsers, idOwner);
  res.status(201).json(instanceToInstance(createPoolUsers));
};

export default poolUserCreateController;
