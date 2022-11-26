import AppDataSource from "../../data-source";
import { Bet } from "../../entities/bet.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";

const betsListService = async (userId: string) => {
  const betRepository = AppDataSource.getRepository(Bet);
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ id: userId });

  if (!user) {
    throw new AppError(404, "User not exist");
  }

  const listBetsUser = await betRepository.find({
    where: {
      user: {
        id: userId,
      },
    },
  });

  return listBetsUser;
};

export default betsListService;
