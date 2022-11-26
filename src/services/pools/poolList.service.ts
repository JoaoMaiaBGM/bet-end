import AppDataSource from "../../data-source";
import { Pool } from "../../entities/pool.entity";

const listPoolService = async () => {
  const poolRepository = AppDataSource.getRepository(Pool);

  const pool = await poolRepository.find();

  return pool;
};

export default listPoolService;
