import axios from "axios";
import { baseUrl } from "../constants/baseUrl";

export const requestData = async (type, path, body, token, setData) => {
  try {
    setData("")
    let res;
    if (!body)
      res = await axios[type](`${baseUrl}${path}`, {
        headers: { authorization: token },
      });
    else
      res = await axios[type](`${baseUrl}${path}`, body, {
        headers: { authorization: token },
      });
    console.log(res);
    setData(res);
  } catch (error) {
    console.log(error.response);
    setData(error.response);
  }
};
