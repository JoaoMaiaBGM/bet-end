import { Request, Response } from "express";
import matchUpdateService from "../../services/matches/matchUpdate.service";

const matchUpdateController = async (req: Request, res: Response) => {
  const matchData = req.body;
  const id = req.params.id;

  const matchToUpdate = await matchUpdateService(id, matchData);

  return res.status(200).json(matchToUpdate);
};

export default matchUpdateController;
