import AppDataSource from "../../data-source";
import bcrypt from "bcryptjs";

import { IUserRequest } from "../../interfaces/user";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";

const userCreateService = async ({
  name,
  email,
  password,
  isAdm,
}: IUserRequest) => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ email });

  if (user) {
    throw new AppError(400, "User Already Exists");
  }

  const newUser = new User();
  newUser.name = name;
  newUser.email = email;
  newUser.password = bcrypt.hashSync(password, 10);
  newUser.isAdm = isAdm;

  userRepository.create(newUser);

  await userRepository.save(newUser);

  return newUser;
};

export default userCreateService;
