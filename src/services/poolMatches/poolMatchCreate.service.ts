import AppDataSource from "../../data-source";
import { Matches } from "../../entities/matches.entity";
import { Pool } from "../../entities/pool.entity";
import { PoolMatches } from "../../entities/poolMatches.entity";
import { AppError } from "../../errors/appError";
import { IPoolMatches } from "../../interfaces/match";

const poolMatchCreateService = async (
  { matchesId, poolId }: IPoolMatches,
  idOwner: string
) => {
  const poolMatchesRepository = AppDataSource.getRepository(PoolMatches);

  const poolRepository = AppDataSource.getRepository(Pool);
  const matcheRepository = AppDataSource.getRepository(Matches);

  const pool = await poolRepository.findOneBy({ id: poolId });

  if (!pool) {
    throw new AppError(404, "Pool if not exist");
  }

  const matche = await matcheRepository.findOneBy({ id: matchesId });

  if (!matche) {
    throw new AppError(404, "Match not exist");
  }

  const findIdOwner = await poolRepository.findOne({
    where: {
      owner: {
        id: idOwner,
      },
    },
  });

  if (!findIdOwner) {
    throw new AppError(404, "You are not the owner of the pool");
  }

  const findMatch = await poolMatchesRepository.findOne({
    where: {
      matches: {
        id: matchesId,
      },
    },
  });

  if (findMatch) {
    throw new AppError(404, "Match has already been added");
  }

  const poolMatches = poolMatchesRepository.create({
    matches: matche,
    pool: pool,
  });

  await poolMatchesRepository.save(poolMatches);

  return poolMatches;
};

export default poolMatchCreateService;
