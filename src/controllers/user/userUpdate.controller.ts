import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import { IUserUpdate } from "../../interfaces/user";
import userUpdateService from "../../services/user/userUpdate.service";

const userUpdateController = async (req: Request, res: Response) => {
  try {
    const { name, email, password }: IUserUpdate = req.body;
    const { id } = req.params;

    const user = await userUpdateService({ name, email, password }, id);

    return res.status(200).json(instanceToPlain(user));
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};

export default userUpdateController;
