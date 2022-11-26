import { Request, Response } from "express";
import betUpdateResultService from "../../services/bets/betUpdateResult.service";

const betUpdateResultController = async (req: Request, res: Response) => {
  const id = req.params.id;
  const updateBet = await betUpdateResultService(id);
  res.status(200).json(updateBet);
};

export default betUpdateResultController;
