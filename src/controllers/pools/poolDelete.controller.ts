import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import poolDeleteService from "../../services/pools/poolDelete.service";

const poolDeleteController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const idOwner = req.user.id;

    await poolDeleteService(id, idOwner!);

    return res.status(200).json({
      message: "Pool deleted with sucess",
    });
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};

export default poolDeleteController;
