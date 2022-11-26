import AppDataSource from "../../data-source";
import { Matches } from "../../entities/matches.entity";
import { AppError } from "../../errors/appError";

const matchListService = async (): Promise<Matches[]> => {
  const matchRepository = AppDataSource.getRepository(Matches);

  const match = await matchRepository.find();

  if (!match) {
    throw new AppError(404, "Match not found");
  }

  return match;
};

export default matchListService;
