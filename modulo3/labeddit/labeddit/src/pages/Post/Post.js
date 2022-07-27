import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import CardFeed from "../../components/Cards/CardFeed";
import { LineDivisor, MiracleDiv } from "../../components/Global/GeneralStyle";
import CardComment from "../../components/Cards/CardComment";
import { useNavigate, useParams } from "react-router-dom";
import { GlobalContext } from "../../components/Global/GlobalContext";
import {
  ButtonNewComment,
  Comments,
  ContainerPost,
  PostPage,
  TextBoxComment,
} from "./style";
import { useForm } from "../../hooks/useForm";
import { requestData } from "../../services/requestApi";

export default function Post() {
  const token = localStorage.getItem("token");
  const [data, setData] = useState("");
  const navigate = useNavigate();
  const { dataPosts, updatePost, setUpdatePost } = useContext(GlobalContext);
  const { form, onChange, clearForm } = useForm({ title: "", body: "" });
  const params = useParams();

  let currentPost = "";
  console.log(dataPosts);
  if (dataPosts) {
    currentPost = dataPosts.data?.filter((item) => {
      return item.id === params.id;
    });
  }
  useEffect(() => {
    if (!!data && token) {
      if (data.status >= 400) {
        alert(data.data);
      } else if (data.data) {
        setUpdatePost(!updatePost);
        clearForm();
      } else {
        console.log("Erro não identicado,erro abaixo de 400");
      }
    }
  }, [data]);

  const newPost = async (e) => {
    e.preventDefault();
    if (dataPosts && form.title && form.body) {
      await requestData("post", `posts/${params.id}/comments`, form, token, setData);
    }
  };

  console.log(currentPost);

  return (
    <PostPage>
      <Header page={"post"} />
      {currentPost && (
        <ContainerPost>
          <CardFeed post={currentPost[0]} />
          <TextBoxComment placeholder="Adicionar comentário" />
          <ButtonNewComment>Responder</ButtonNewComment>
          <LineDivisor top={"18px"} bottom={"0px"} />
          <Comments>
            <MiracleDiv size={"36px"} />
            <CardComment />
            <MiracleDiv size={"36px"} />
          </Comments>
        </ContainerPost>
      )}
    </PostPage>
  );
}
