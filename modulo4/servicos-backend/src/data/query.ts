import { address } from "../types";
import { connection } from "./connection";

export const createAddress = async (userAddress: address): Promise<address> => {
  const res: address = await connection().insert(userAddress).into(`Address`);
  return res;
};
