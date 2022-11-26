import AppDataSource from "../../data-source";
import { Pool } from "../../entities/pool.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";

const poolUpdateService = async (id: string, name: string, idOwner: string) => {
  const poolRepository = AppDataSource.getRepository(Pool);
  const userRepository = AppDataSource.getRepository(User);
  const pool = await poolRepository.findOneBy({
    id,
  });
  if (!pool) {
    throw new AppError(400, "Pool not found");
  }

  const findOwner = await userRepository.findOneBy({
    id: idOwner,
  });

  if (!findOwner) {
    throw new AppError(401, "You not owner");
  }

  const owner = pool.owner.id === findOwner.id;
  const adm = findOwner.isAdm;
  if (!owner && !adm) {
    throw new AppError(401, "You not owner");
  }

  await poolRepository.update(id, {
    name,
  });

  const newPool = await poolRepository.findOneBy({
    id,
  });

  return newPool;
};

export default poolUpdateService;
