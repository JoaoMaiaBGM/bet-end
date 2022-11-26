import { Request, Response } from "express";
import poolUserDeleteService from "../../services/poolUsers/poolUserDelete.service";

const poolUserDeleteController = async (req: Request, res: Response) => {
  const idUser: string = req.params.id;
  const idOwner: string = req.user.id!;
  const deleteUser = await poolUserDeleteService(idUser, idOwner);
  res.status(204).json(deleteUser);
};

export default poolUserDeleteController;
