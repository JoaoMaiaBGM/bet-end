import AppDataSource from "../../data-source";
import { Bet } from "../../entities/bet.entity";
import { AppError } from "../../errors/appError";

const betDeleteService = async (idBet: string, idUser: string) => {
  const betRepository = AppDataSource.getRepository(Bet);

  const findBet = await betRepository.findOneBy({ id: idBet });

  if (!findBet) {
    throw new AppError(404, "Bet not found");
  }

  const findOwnerBet = await betRepository.findOne({
    where: {
      id: idBet,
    },
    relations: {
      user: true,
    },
  });

  if (findOwnerBet?.user.id !== idUser) {
    throw new AppError(404, "You are not the owner of the bet");
  }

  await betRepository.delete(findBet!.id);

  return "Bet deleted with success";
};

export default betDeleteService;
