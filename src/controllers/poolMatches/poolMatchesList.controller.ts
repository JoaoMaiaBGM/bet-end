import { Request, Response } from "express";
import poolMatchesListService from "../../services/poolMatches/poolMatchesList.service";

const poolMatchesListController = async (req: Request, res: Response) => {
  const idPool: string = req.params.id;
  const listMatchesPool = await poolMatchesListService(idPool);
  res.json(listMatchesPool);
};

export default poolMatchesListController;
