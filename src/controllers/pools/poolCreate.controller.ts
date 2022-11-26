import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import { AppError } from "../../errors/appError";
import { IPoolRequest } from "../../interfaces/pools";
import poolCreateService from "../../services/pools/poolCreate.service";

const poolCreateController = async (req: Request, res: Response) => {
  try {
    const pool: IPoolRequest = req.body;
    const createPool = await poolCreateService(pool);
    res.status(201).json(instanceToPlain(createPool));
  } catch (error) {
    if (error instanceof AppError) {
      return res.status(401).json({
        message: error.message,
      });
    }
  }
};

export default poolCreateController;
