import AppDataSource from "../../data-source";
import { Pool } from "../../entities/pool.entity";
import { PoolUsers } from "../../entities/poolUsers.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";
import { IPoolUsers } from "../../interfaces/poolUsers";

const poolUserCreateService = async (
  { poolId, userId }: IPoolUsers,
  idOwner: string
) => {
  const poolUserRepository = AppDataSource.getRepository(PoolUsers);

  const poolRepository = AppDataSource.getRepository(Pool);
  const userRepository = AppDataSource.getRepository(User);

  const pool = await poolRepository.findOneBy({ id: poolId });

  if (!pool) {
    throw new AppError(404, "Pool not exist");
  }

  const user = await userRepository.findOneBy({ id: userId });

  if (!user) {
    throw new AppError(404, "User not exist");
  }

  const findIdPool = await poolRepository.findOne({
    where: { owner: { id: idOwner } },
  });

  if (!findIdPool) {
    throw new AppError(404, "you are not the owner of the pool");
  }

  const findIdUser = await poolUserRepository.findOne({
    where: { user: { id: userId } },
  });

  if (findIdUser) {
    throw new AppError(404, "User has already been added");
  }

  const addUser = poolUserRepository.create({
    pool: pool,
    user: user,
  });

  await poolUserRepository.save(addUser);

  return addUser;
};

export default poolUserCreateService;
