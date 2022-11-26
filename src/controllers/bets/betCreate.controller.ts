import { instanceToInstance } from "class-transformer";
import { Request, Response } from "express";
import { IBetRequest } from "../../interfaces/bet";
import betCreateService from "../../services/bets/betCreate.service";

const betCreateController = async (req: Request, res: Response) => {
  const bet: IBetRequest = req.body;
  const userId: string = req.user.id!;
  const createBet = await betCreateService(bet, userId);
  res.status(201).json(instanceToInstance(createBet));
};

export default betCreateController;
