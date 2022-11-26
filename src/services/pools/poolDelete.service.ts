import AppDataSource from "../../data-source";
import { Pool } from "../../entities/pool.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";

const poolDeleteService = async (id: string, idOwner: string) => {
  const poolRepository = AppDataSource.getRepository(Pool);
  const userRepository = AppDataSource.getRepository(User);

  const findPool = await poolRepository.findOneBy({
    id,
  });

  if (!findPool) {
    throw new AppError(400, "Pool not found");
  }
  const findOwner = await userRepository.findOneBy({
    id: idOwner,
  });

  if (!findOwner) {
    throw new AppError(401, "You not owner");
  }

  const owner = findPool.owner.id === findOwner.id;
  const adm = findOwner.isAdm;

  if (!owner && !adm) {
    throw new AppError(401, "You not owner");
  }

  await poolRepository.delete({
    id,
  });
};

export default poolDeleteService;
