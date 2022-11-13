import axios from "axios";
import { ApiBaseURL, ApiKey } from "../../constants/Basic";

const GetGenres = async (set) => {
  try {
    const pathUrl = `/genre/movie/list?api_key=${ApiKey}&language=pt-BR`;
    const { data } = await axios.get(`${ApiBaseURL}${pathUrl}`);
    set(data.genres);
  } catch (error) {
    console.log(error.message);
  }
};

export default GetGenres;
