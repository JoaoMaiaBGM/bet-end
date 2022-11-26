import { Request, Response } from "express";
import matchListService from "../../services/matches/matchList.service";

const matchListController = async (req: Request, res: Response) => {
  const matchList = await matchListService();

  return res.status(200).send(matchList);
};

export default matchListController;
