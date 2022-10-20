import axios from "axios";
import { ApiBaseURL, ApiKey } from "../../constants/Basic";

const GetMovies = async (page = 1, set) => {
  try {
    const pathUrl = `/movie/popular?api_key=${ApiKey}&language=pt-BR&page=${page}`;
    const { data } = await axios.get(`${ApiBaseURL}${pathUrl}`);
    set(data.results);
  } catch (error) {
    console.log(error);
  }
};

export default GetMovies;
