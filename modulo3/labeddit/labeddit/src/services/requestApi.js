import axios from "axios";
import { baseUrl } from "../constants/baseUrl";

export const requestData = async (
  type,
  path,
  body,
  token,
  setData,
  setErro
) => {
  try {
    setData("");
    let res;
    if (!body)
      res = await axios[type](`${baseUrl}${path}`, {
        headers: { authorization: token },
      });
    else
      res = await axios[type](`${baseUrl}${path}`, body, {
        headers: { authorization: token },
      });
    setData(res);
  } catch (error) {
    if (setErro) {
      setErro(error.response);
    }
  }
};
