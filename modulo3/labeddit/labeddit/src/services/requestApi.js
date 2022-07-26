import axios from "axios";
import { baseUrl } from "../constants/baseUrl";

export const requestData = async (type, path, body, token, setData) => {
  try {
    console.log(type, path, body, token);
    const res = await axios[type](
      `${baseUrl}${path}`,
      body && body,
      token && {
        headers: { Authorization: token },
      }
    );
    console.log(res);
    setData(res);
  } catch (error) {
    console.log(error.response);
    setData(error.response);
  }
};
