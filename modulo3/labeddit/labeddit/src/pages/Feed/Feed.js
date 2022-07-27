import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import {
  ButtonNewPost,
  ButtonNewPostOFF,
  ContarinerFeed,
  FeedPage,
  FormFeed,
  InputTitle,
  Pagination,
  Posts,
  TextBoxPost,
} from "./style";
import { useForm } from "../../hooks/useForm";
import CardFeed from "../../components/Cards/CardFeed";
import { LineDivisor, MiracleDiv } from "../../components/Global/GeneralStyle";
import { GlobalContext } from "../../components/Global/GlobalContext";
import { useNavigate } from "react-router-dom";
import { requestData } from "../../services/requestApi";
import { goTo } from "../../routes/Coordinator";

export default function Feed() {
  const token = localStorage.getItem("token");
  const [data, setData] = useState("");
  const navigate = useNavigate();
  const { dataPosts, updatePost, setUpdatePost } = useContext(GlobalContext);
  const { form, onChange, clearForm } = useForm({ title: "", body: "" });
  
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
    await requestData("post", "posts", form, token, setData);
  };
  
  if(!token){
    goTo(navigate,"")
  }
  return (
    <FeedPage>
      <Header />
      <ContarinerFeed>
        <FormFeed>
          <InputTitle
            name="title"
            onChange={onChange}
            value={form.title}
            placeholder="Título"
          />
          <MiracleDiv size={"8px"} />
          <TextBoxPost
            name="body"
            onChange={onChange}
            value={form.body}
            placeholder="Escreva seu post..."
          />
          {!!(dataPosts && form.title && form.body) || (
            <ButtonNewPostOFF>Postar</ButtonNewPostOFF>
          )}
          {!!(dataPosts && form.title && form.body) && (
            <ButtonNewPost onClick={newPost}>Postar</ButtonNewPost>
          )}
        </FormFeed>
        <LineDivisor top={"12px"} bottom={"0px"} />
        {!dataPosts && <p>Carregando...</p>}
        {!dataPosts && dataPosts.status >= 300 && (
          <p>Erro encontrado...Error {dataPosts.status}</p>
        )}
        {dataPosts && dataPosts.status < 300 && (
          <Posts>
            <MiracleDiv size={"50px"} />
            {dataPosts.data.map((item) => {
              return (
                <CardFeed
                  key={item.id}
                  post={item}
                  setUpdatePost={setUpdatePost}
                  updatePost={updatePost}
                />
              );
            })}
            <Pagination>1 2 3</Pagination>
            <MiracleDiv size={"28px"} />
          </Posts>
        )}
      </ContarinerFeed>
    </FeedPage>
  );
}
