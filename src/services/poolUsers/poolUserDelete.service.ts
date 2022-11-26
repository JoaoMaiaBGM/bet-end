import AppDataSource from "../../data-source";
import { Pool } from "../../entities/pool.entity";
import { PoolUsers } from "../../entities/poolUsers.entity";
import { AppError } from "../../errors/appError";

const poolUserDeleteService = async (idUser: string, idOwner: string) => {
  const poolUserRepository = AppDataSource.getRepository(PoolUsers);
  const poolRepository = AppDataSource.getRepository(Pool);

  const findIdPool = await poolRepository.findOne({
    where: { owner: { id: idOwner } },
  });

  if (!findIdPool) {
    throw new AppError(404, "you are not the owner of the pool");
  }

  const findUser = await poolUserRepository.findOneBy({ id: idUser });

  if (!findUser) {
    throw new AppError(404, "User not found");
  }

  await poolUserRepository.delete(findUser!.id);

  return { message: "User deleted" };
};

export default poolUserDeleteService;
