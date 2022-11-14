import bcrypt from "bcryptjs";
import { IUserUpdate } from "../../interfaces/user";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";

const userUpdateService = async (
  { name, email, password }: IUserUpdate,
  id: string
) => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ id });
  if (!user) {
    throw new AppError(404, "User not found");
  }

  await userRepository.update(id, {
    name: name ? name : user!.name,
    email: email ? email : user!.email,
    password: password ? bcrypt.hashSync(password!, 10) : user!.password,
  });

  const updatedUser = await userRepository.findOneBy({ id });

  return updatedUser;
};

export default userUpdateService;
