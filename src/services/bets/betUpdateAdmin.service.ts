import AppDataSource from "../../data-source";
import { Bet } from "../../entities/bet.entity";
import { AppError } from "../../errors/appError";
import { IBetUpdate } from "../../interfaces/bet";

const betUpdateAdminService = async (
  idBet: string,
  { result, score }: IBetUpdate,
  userId: string
) => {
  const betRepository = AppDataSource.getRepository(Bet);

  const findBet = await betRepository.findOneBy({ id: idBet });

  if (!findBet) {
    throw new AppError(404, "Bet not found!");
  }

  const findOwnerBet = await betRepository.findOne({
    where: {
      id: idBet,
    },
    relations: {
      user: true,
    },
  });

  if (findOwnerBet?.user.id !== userId) {
    throw new AppError(404, "You are not the owner of the bet");
  }

  const findMatch = await betRepository.findOne({
    where: {
      id: idBet,
    },
    relations: {
      matches: true,
    },
  });
  const date = new Date();
  const today = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const dayMatch = findMatch?.matches.day;
  const daySplit: any = dayMatch?.split("-");
  const numDay = Number(daySplit[2]);
  const hourMatch = findMatch?.matches.hour;
  const hourSplit: any = hourMatch?.split(":");
  const numHour = Number(hourSplit[0]);
  const numMinute = Number(hourSplit[1]);

  if (today > numDay) {
    throw new AppError(404, "Game day has expired");
  }

  if (today > numDay && hour > numHour) {
    throw new AppError(404, "Game hour has expired");
  }

  if (today > numDay && hour > numHour && minute > numMinute) {
    throw new AppError(404, "Game minute has expired");
  }

  await betRepository.update(idBet, {
    result: result ? result : findBet.result,
    score: score ? score : findBet.score,
  });

  const bet = await betRepository.findOneBy({ id: idBet });

  return bet;
};

export default betUpdateAdminService;
