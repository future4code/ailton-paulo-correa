import axios from "axios";
import { baseURL } from "../constants/urlAPI";

export const getProfileToChoose = async (setPessoa, setLoading) => {
  try {
    setLoading(true);
    setPessoa({});
    const res = await axios.get(baseURL + "paulo/person");
    setPessoa(res.data.profile);
    setLoading(false);
  } catch (error) {
    console.log(error);
  }
};

export const getMatches = async (getMatches) => {
  try {
    const res = await axios.get(baseURL + "paulo/matches");
    getMatches(res.data.matches);
  } catch (error) {
    console.log(error);
  }
};

export const choosePerson = async (id, choice, setPessoa, setLoading) => {
  try {
    const body = {
      id: id,
      choice: choice,
    };
    await axios.post(baseURL + "paulo/choose-person", body);
    getProfileToChoose(setPessoa, setLoading);
  } catch (error) {
    console.log(error);
  }
};

export const clear = async (setPage) => {
  try {
    await axios.put(baseURL + "paulo/clear");
    setPage("home")
  } catch (error) {
    console.log(error);
  }
};
