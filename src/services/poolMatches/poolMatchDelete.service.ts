import AppDataSource from "../../data-source";
import { Pool } from "../../entities/pool.entity";
import { PoolMatches } from "../../entities/poolMatches.entity";
import { AppError } from "../../errors/appError";

const poolMatchDeleteService = async (idMatch: string, idOwner: string) => {
  const poolMatchesRepository = AppDataSource.getRepository(PoolMatches);
  const poolRepository = AppDataSource.getRepository(Pool);

  const findMatch = await poolMatchesRepository.findOneBy({ id: idMatch });

  if (!findMatch) {
    throw new AppError(404, "Match not found");
  }

  const findIdOwner = await poolRepository.findOne({
    where: {
      owner: {
        id: idOwner,
      },
    },
  });

  if (!findIdOwner) {
    throw new AppError(404, "you are not the owner of the pool");
  }

  await poolMatchesRepository.delete(findMatch!.id);

  return { message: "Matche deleted" };
};

export default poolMatchDeleteService;
