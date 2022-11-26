import AppDataSource from "../../data-source";
import { Matches } from "../../entities/matches.entity";
import { AppError } from "../../errors/appError";
import { IMatchUpdate } from "../../interfaces/match";

const matchUpdateService = async (id: string, matchData: IMatchUpdate) => {
  const matchRepository = AppDataSource.getRepository(Matches);

  const match = await matchRepository.findOneBy({
    id: id,
  });
  if (!match) {
    throw new AppError(404, "Match not found");
  }

  const keys = Object.keys(matchData);
  if (keys.includes("id")) {
    throw new AppError(401, "Not allowed");
  }

  await matchRepository.update(id, {
    day: matchData.day,
    hour: matchData.hour,
    result: matchData.result,
    score: matchData.score,
    team1: matchData.team1,
    team2: matchData.team2,
  });

  const matchUpdated = await matchRepository.findOne({
    where: {
      id: id,
    },
  });

  return matchUpdated;
};

export default matchUpdateService;
