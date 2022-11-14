import bcrypt from "bcryptjs";
import { Request, Response, NextFunction } from "express";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";

const userUpdatePasswordUtils = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { password } = req.body;
  const { id } = req.params;

  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({ id });

  if (password) {
    if (bcrypt.compareSync(password!, user!.password)) {
      throw new AppError(403, "Inform a different password");
    }
  }

  next();
};

export default userUpdatePasswordUtils;
