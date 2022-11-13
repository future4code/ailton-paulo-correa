import axios from "axios";
import { ApiBaseURL, ApiKey } from "../../constants/Basic";

const GetTrailer = async (id, set) => {
  try {
    const pathUrl = `/movie/${id}/videos?api_key=${ApiKey}&language=pt-BR`;
    const { data } = await axios.get(`${ApiBaseURL}${pathUrl}`);
    set(data.results);
  } catch (error) {
    console.log(error);
  }
};

export default GetTrailer;
