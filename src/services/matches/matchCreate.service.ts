import AppDataSource from "../../data-source";
import { Matches } from "../../entities/matches.entity";
import { IMatchesRequest } from "../../interfaces/match";

const matchCreateService = async ({
  day,
  hour,
  team1,
  team2,
}: IMatchesRequest): Promise<Matches> => {
  const matchesRepository = AppDataSource.getRepository(Matches);

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
