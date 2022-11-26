import AppDataSource from "../../data-source";
import { Matches } from "../../entities/matches.entity";
import { PoolMatches } from "../../entities/poolMatches.entity";
import { AppError } from "../../errors/appError";

const matchDeleteService = async (matchId: string) => {
  const matchRepository = AppDataSource.getRepository(Matches);
  const poolMatchesRepository = AppDataSource.getRepository(PoolMatches);

  const poolMatches = poolMatchesRepository.find();

  const match = await matchRepository.findOneBy({
    id: matchId,
  });
  if (!match) {
    throw new AppError(404, "Match not found");
  }

  const isMatchInPool = (await poolMatches).find(
    (element) => element.matches.id === matchId
  );
  if (isMatchInPool) {
    throw new AppError(403, "Match beeing used");
  }

  await matchRepository.delete(match!.id);
};

export default matchDeleteService;
