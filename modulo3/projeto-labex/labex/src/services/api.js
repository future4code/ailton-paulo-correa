import axios from "axios";
import { BaseUrl } from "../constants/constants";

///// End Points Get
// trips
// trip/:id
export const getApi = async (endPoint, auth) => {
  try {
    const res = await axios.get(
      `${BaseUrl}${endPoint}`,
      auth && {
        headers: {
          auth: auth,
        },
      }
    );
    return res.data;
  } catch (error) {
    return error;
  }
};

///// End Points Post
// trips
// trips/:id/apply
// login
export const postApi = async (endPoint, body, auth) => {
  try {
    const res = await axios.post(
      `${BaseUrl}${endPoint}`,
      body,
      auth && {
        headers: {
          auth: auth,
        },
      }
    );
    return res.data;
  } catch (error) {
    return error;
  }
};
///// End Point Del
// trips/:id
export const deleteTrip = async (endPoint, auth, setTrips) => {
  try {
    await axios.delete(`${BaseUrl}${endPoint}`, { headers: { auth: auth } });
    const res = await getApi("trips/", auth);
    setTrips(res.trips)
    console.log("Deletado");
    return "Deletado com sucesso!";
  } catch (error) {
    return error;
  }
};

///// End Point Put
// trips/:tripId/candidates/:candidateId/decide
export const decideCandidate = async (endPoint, auth) => {
  try {
    await axios.put(`${BaseUrl}${endPoint}`, { headers: { auth: auth } });
    console.log("Feito");
  } catch (error) {
    return error;
  }
};
////// depois conferir se os candidatos aprovados sempre mudam por causa dessa requisição...
