import AppDataSource from "../../data-source";
import { Bet } from "../../entities/bet.entity";
import { Matches } from "../../entities/matches.entity";
import { Pool } from "../../entities/pool.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";
import { IBetRequest } from "../../interfaces/bet";

const betCreateService = async (
  { matchId, result, score, poolId }: IBetRequest,
  userId: string
) => {
  const betRepository = AppDataSource.getRepository(Bet);

  const matchRepository = AppDataSource.getRepository(Matches);
  const userRepository = AppDataSource.getRepository(User);
  const poolRepository = AppDataSource.getRepository(Pool);

  const match = await matchRepository.findOneBy({ id: matchId });

  if (!match) {
    throw new AppError(404, "Match not exist");
  }

  const user = await userRepository.findOneBy({ id: userId });

  if (!user) {
    throw new AppError(404, "User not exist");
  }

  const pool = await poolRepository.findOneBy({ id: poolId });

  if (!pool) {
    throw new AppError(404, "Pool not exist");
  }

  const createBet = betRepository.create({
    result,
    score,
    matches: match,
    user: user,
    pool: pool,
  });

  await betRepository.save(createBet);

  return createBet;
};

export default betCreateService;
