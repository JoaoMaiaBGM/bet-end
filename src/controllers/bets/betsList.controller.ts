import { Request, Response } from "express";
import betsListService from "../../services/bets/betsList.service";

const betsListController = async (req: Request, res: Response) => {
  const userId: string = req.params.id;
  const listBets = await betsListService(userId);
  res.json(listBets);
};

export default betsListController;
