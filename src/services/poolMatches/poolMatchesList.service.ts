import AppDataSource from "../../data-source";
import { Pool } from "../../entities/pool.entity";
import { PoolMatches } from "../../entities/poolMatches.entity";
import { AppError } from "../../errors/appError";

const poolMatchesListService = async (idPool: string) => {
  const poolMatchesRepository = AppDataSource.getRepository(PoolMatches);

  const poolRepository = AppDataSource.getRepository(Pool);

  const pool = poolRepository.findOneBy({ id: idPool });

  if (!pool) {
    throw new AppError(404, "Pool not exist");
  }

  const listMatchesPool = poolMatchesRepository.find({
    where: {
      pool: {
        id: idPool,
      },
    },
  });

  return listMatchesPool;
};

export default poolMatchesListService;
