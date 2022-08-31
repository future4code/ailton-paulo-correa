import axios from "axios";
import { address, searchdata } from "../types";
import { baseUrl } from "./baseUrl";

export const searchCEP = async (search: string): Promise<any> => {
  try {
    const { data }: searchdata = await axios.get(
      `${baseUrl}/${search.replace("-", "")}/json/`
    );
    // if(!data)
    console.log("aa", data);

    const result: address = {
      code: data.cep,
      street: data.logradouro,
      district: data.bairro,
      city: data.localidade,
      state: data.uf,
    };
    return result;
  } catch (error: any) {
    return false;
  }
};
