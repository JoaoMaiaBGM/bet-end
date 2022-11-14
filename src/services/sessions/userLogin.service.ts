import { AppError } from "./../../errors/appError";
import { IUserLogin } from "../../interfaces/user";
import { User } from "../../entities/user.entity";
import bcrypt from "bcryptjs";
import AppDataSource from "../../data-source";
import jwt from "jsonwebtoken";
import "dotenv/config";

const userLoginService = async ({
  email,
  password,
}: IUserLogin): Promise<string> => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find();

  const account = users.find((user) => user.email === email);
  if (!account) {
    throw new AppError(403, "Wrong email or password");
  }

  if (!bcrypt.compareSync(password, account.password)) {
    throw new AppError(403, "Wrong email or password");
  }

  const token = jwt.sign(
    { email: email, isAdm: account.isAdm },
    process.env.SECRET_KEY as string,
    { expiresIn: "2h", subject: account.id }
  );

  return token;
};

export default userLoginService;
