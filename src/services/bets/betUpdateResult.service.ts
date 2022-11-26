import AppDataSource from "../../data-source";
import { Bet } from "../../entities/bet.entity";

const betUpdateResultService = async (id: string) => {
  const betsRepository = AppDataSource.getRepository(Bet);

  const bet = await betsRepository.findOne({
    where: {
      id: id,
    },
    relations: {
      matches: true,
    },
  });

  const updateResult = async () => {
    let betPoints = 0;

    if (bet!.result === bet!.matches!.result) {
      betPoints += 3;
    }

    if (bet!.score === bet!.matches!.score) {
      betPoints += 2;
    }

    return betPoints;
  };

  await betsRepository.update(id, {
    points: await updateResult(),
  });

  const betResultUpdated = await betsRepository.findOne({
    where: {
      id: id,
    },
  });

  return betResultUpdated;
};

export default betUpdateResultService;
