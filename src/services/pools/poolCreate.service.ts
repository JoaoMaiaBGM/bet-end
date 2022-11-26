import { Pool } from "../../entities/pool.entity";
import AppDataSource from "../../data-source";
import { AppError } from "../../errors/appError";
import { IPoolRequest } from "../../interfaces/pools";
import { User } from "../../entities/user.entity";

const poolCreateService = async ({ name, owner }: IPoolRequest) => {
  const poolRepository = AppDataSource.getRepository(Pool);
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ id: owner });

  if (!user) {
    throw new AppError(404, "User not exist");
  }

  const nameAlreadyExist = await poolRepository.findOneBy({ name });

  if (nameAlreadyExist) {
    throw new AppError(404, "Name already exist");
  }

  const createPool = poolRepository.create({
    name,
    owner: user,
  });

  await poolRepository.save(createPool);

  return createPool;
};

export default poolCreateService;
