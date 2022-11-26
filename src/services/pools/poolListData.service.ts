import AppDataSource from "../../data-source";
import { Pool } from "../../entities/pool.entity";
import { AppError } from "../../errors/appError";

const poolListDataService = async (id: string): Promise<Pool> => {
  const poolRepository = AppDataSource.getRepository(Pool);
  const pool = await poolRepository.findOneBy({
    id,
  });

  if (!pool) {
    throw new AppError(400, "Pool not found");
  }

  return pool;
};

export default poolListDataService;
