import { Request, Response } from "express";
import matchCreateService from "../../services/matches/matchCreate.service";

const matchCreateController = async (req: Request, res: Response) => {
  const match = req.body;

  const newMatch = await matchCreateService(match);

  return res.status(201).json(newMatch);
};

export default matchCreateController;
