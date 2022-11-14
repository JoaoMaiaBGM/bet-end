import { instanceToInstance } from "class-transformer";
import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import userCreateService from "../../services/user/createUser.service";

const userCreateController = async (req: Request, res: Response) => {
  try {
    const { email, name, password, isAdm } = req.body;

    const newUser = await userCreateService({ email, name, password, isAdm });

    return res.status(201).json(instanceToInstance(newUser));
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};

export default userCreateController;
