import { Request, Response } from "express";
import { IPoolMatches } from "../../interfaces/match";
import poolMatchCreateService from "../../services/poolMatches/poolMatchCreate.service";

const poolMatchCreateController = async (req: Request, res: Response) => {
  const idOwner: string = req.user.id!;
  const poolMatches: IPoolMatches = req.body;
  const createPoolMatches = await poolMatchCreateService(poolMatches, idOwner);
  res.status(201).json(createPoolMatches);
};

export default poolMatchCreateController;
