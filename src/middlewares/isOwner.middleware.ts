import { Request, Response, NextFunction } from "express";
import { Pool } from "../entities/pool.entity";
import AppDataSource from "../data-source";
import { AppError } from "../errors/appError";

const isOwnerMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const poolRepository = AppDataSource.getRepository(Pool);
  const id = req.body.pool;

  const pool = await poolRepository.findOneBy({
    id,
  });

  const owner = pool?.owner.id === req.user.id;

  if (!pool) {
    throw new AppError(400, "Pool not found");
  }

  if (!owner) {
    throw new AppError(400, "Missing permition");
  }

  next();
};

export default isOwnerMiddleware;
