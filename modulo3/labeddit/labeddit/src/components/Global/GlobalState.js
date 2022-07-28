import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { goTo } from "../../routes/Coordinator";
import { requestData } from "../../services/requestApi";
import { GlobalContext } from "./GlobalContext";

export default function GlobalState({ children }) {
  const Provider = GlobalContext.Provider;
  const [dataPosts, setDataPosts] = useState("");
  const [pagination, setPagination] = useState(1);
  const [updatePost, setUpdatePost] = useState(false);
  const [erro, setErro] = useState("");
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    const path = `posts?page=${1}&size=20`;
    const getData = async () => {
      if (!token) {
        localStorage.setItem("token", "");
        goTo(navigate, "");
      } else {
        await requestData("get", path, null, token, setDataPosts, setErro);
      }
    };
    getData();
  }, [updatePost]);

  if (erro.status === 401 && token) {
    localStorage.setItem("token", "");
    goTo(navigate, "");
  }
  const values = { dataPosts, updatePost, setUpdatePost };

  return <Provider value={values}>{children}</Provider>;
}
