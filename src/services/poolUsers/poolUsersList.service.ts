import AppDataSource from "../../data-source";
import { Pool } from "../../entities/pool.entity";
import { PoolUsers } from "../../entities/poolUsers.entity";
import { AppError } from "../../errors/appError";

const poolUsersListService = async (idPool: string) => {
  const poolUserRepository = AppDataSource.getRepository(PoolUsers);

  const poolRepository = AppDataSource.getRepository(Pool);
  const pool = await poolRepository.findOneBy({ id: idPool });

  if (!pool) {
    throw new AppError(404, "Pool not exist");
  }

  const listUsers = await poolUserRepository.find({
    where: {
      pool: {
        id: idPool,
      },
    },
  });

  return listUsers;
};

export default poolUsersListService;
