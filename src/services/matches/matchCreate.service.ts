import AppDataSource from "../../data-source";
import { Matches } from "../../entities/matches.entity";
import { AppError } from "../../errors/appError";
import { IMatchesRequest } from "../../interfaces/match";

const matchCreateService = async ({
  day,
  hour,
  team1,
  team2,
}: IMatchesRequest): Promise<Matches> => {
  const matchesRepository = AppDataSource.getRepository(Matches);

  const match = await matchesRepository.findOneBy({
    team1: team1,
    team2: team2,
    day: day,
  });

  if (match) {
    throw new AppError(409, "Match already exists");
  }

  const newMatch = matchesRepository.create({
    day,
    hour,
    team1,
    team2,
  });

  await matchesRepository.save(newMatch);

  return newMatch;
};

export default matchCreateService;
