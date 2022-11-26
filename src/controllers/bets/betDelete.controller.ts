import { Request, Response } from "express";
import betDeleteService from "../../services/bets/betDelete.service";

const betDeleteController = async (req: Request, res: Response) => {
  const idBet: string = req.params.id;
  const idUser: string = req.user.id!;
  const deleteBet = await betDeleteService(idBet, idUser);
  res.status(204).send(deleteBet);
};

export default betDeleteController;
