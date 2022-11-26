import { Request, Response } from "express";
import poolMatchDeleteService from "../../services/poolMatches/poolMatchDelete.service";

const poolMatchDeleteController = async (req: Request, res: Response) => {
  const idOwner: string = req.user.id!;
  const idMatch: string = req.params.id;
  const deleteMatch = await poolMatchDeleteService(idMatch, idOwner);
  res.status(204).json(deleteMatch);
};

export default poolMatchDeleteController;
