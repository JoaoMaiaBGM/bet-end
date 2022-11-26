import { Request, Response } from "express";
import { IBetUpdate } from "../../interfaces/bet";
import betUpdateAdminService from "../../services/bets/betUpdateAdmin.service";

const betUpdateAdminController = async (req: Request, res: Response) => {
  const userId: string = req.user.id!;
  const idBet: string = req.params.id;
  const bet: IBetUpdate = req.body;
  const updateBet = await betUpdateAdminService(idBet, bet, userId);
  res.json(updateBet);
};

export default betUpdateAdminController;
