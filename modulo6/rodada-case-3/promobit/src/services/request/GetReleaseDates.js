import axios from "axios";
import { ApiBaseURL, ApiKey } from "../../constants/Basic";

const GetReleaseDates = async (id, set) => {
  try {
    const pathUrl = `/movie/${id}/release_dates?api_key=${ApiKey}&language=pt-BR`;
    const { data } = await axios.get(`${ApiBaseURL}${pathUrl}`);
    set(data.results);
  } catch (error) {
    console.log(error);
  }
};

export default GetReleaseDates;
