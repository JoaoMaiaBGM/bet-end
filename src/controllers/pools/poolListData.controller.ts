import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import poolListDataService from "../../services/pools/poolListData.service";

const poolListDataController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const pool = await poolListDataService(id);
    return res.status(200).json(pool);
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};

export default poolListDataController;
