import axios from "axios";
import { ApiBaseURL, ApiKey } from "../../constants/Basic";

const GetCredits = async (id, set) => {
  try {
    const pathUrl = `/movie/${id}/credits?api_key=${ApiKey}&language=pt-BR`;
    const { data } = await axios.get(`${ApiBaseURL}${pathUrl}`);
    set(data);
  } catch (error) {
    console.log(error);
  }
};

export default GetCredits;
