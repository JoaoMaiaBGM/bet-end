import { Request, Response } from "express";
import matchDeleteService from "../../services/matches/matchDelete.service";

const matchDeleteController = async (req: Request, res: Response) => {
  const matchId = req.params.id;

  const matchToDelete = await matchDeleteService(matchId);

  return res.status(204).send({
    message: "Match deleted with success",
  });
};

export default matchDeleteController;
