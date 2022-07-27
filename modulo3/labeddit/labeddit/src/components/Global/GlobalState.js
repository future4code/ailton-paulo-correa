import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { goTo } from "../../routes/Coordinator";
import { requestData } from "../../services/requestApi";
import { GlobalContext } from "./GlobalContext";

export default function GlobalState({ children }) {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  if (!token) {
    goTo(navigate, "");
  }
  const Provider = GlobalContext.Provider;
  const [dataPosts, setDataPosts] = useState("");
  const [pagination, setPagination] = useState(1);
  const [updatePost, setUpdatePost] = useState(false);

  useEffect(() => {
    const path = `posts?page=${pagination}&size=20`;
    const getData = async () => {
      await requestData("get", path, null, token, setDataPosts);
    };
    getData();
    console.log(dataPosts);
  }, [updatePost]);

  const values = { dataPosts, updatePost, setUpdatePost };

  return <Provider value={values}>{children}</Provider>;
}
