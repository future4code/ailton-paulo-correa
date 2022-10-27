import axios from "axios";
import { ApiBaseURL, ApiKey } from "../../constants/Basic";

const GetMovieById = async (id, set) => {
  try {
    const pathUrl = `/movie/${id}?api_key=${ApiKey}&language=pt-BR`;
    const { data } = await axios.get(`${ApiBaseURL}${pathUrl}`);
    set(data);
  } catch (error) {
    console.log(error);
  }
};

export default GetMovieById;
