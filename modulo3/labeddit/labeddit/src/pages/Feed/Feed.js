import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import {
  ButtonNewPost,
  ButtonNewPostOFF,
  ContarinerFeed,
  FeedPage,
  FormFeed,
  InputTitle,
  NavPagination,
  Pagination,
  Posts,
  TextBoxPost,
} from "./style";
import { useForm } from "../../hooks/useForm";
import CardFeed from "../../components/Cards/CardFeed";
import { LineDivisor, MiracleDiv } from "../../components/Global/GeneralStyle";
import { GlobalContext } from "../../components/Global/GlobalContext";
import { requestData } from "../../services/requestApi";
import Loading from "../../components/Loading/Loading";

export default function Feed() {
  const token = localStorage.getItem("token");
  const [data, setData] = useState(undefined);
  const { dataPosts, updatePost, setUpdatePost, pagination, setPagination } =
    useContext(GlobalContext);
  const { form, onChange, clearForm } = useForm({ title: "", body: "" });

  useEffect(() => {
    if (token && data) {
      setUpdatePost(!updatePost);
    }
    clearForm();
  }, [data]);

  useEffect(() => {
    if (!!dataPosts && dataPosts?.data.length === 0) {
      setPagination(pagination - 1);
    }
  }, [dataPosts]);

  const newPost = async () => {
    await requestData("post", "posts", form, token, setData);
  };
  return (
    <FeedPage>
      <Header />
      <ContarinerFeed>
        <FormFeed>
          <InputTitle
            name="title"
            onChange={onChange}
            value={form.title}
            placeholder="Título do post"
          />
          <MiracleDiv size={"8px"} />
          <TextBoxPost
            name="body"
            onChange={onChange}
            value={form.body}
            placeholder="Escreva seu post..."
          />
          {!!(dataPosts && form.title && form.body && token) || (
            <ButtonNewPostOFF>Postar</ButtonNewPostOFF>
          )}
          {!!(dataPosts && form.title && form.body && token) && (
            <ButtonNewPost onClick={newPost}>Postar</ButtonNewPost>
          )}
        </FormFeed>
        <LineDivisor top={"12px"} bottom={"0px"} />
        {!dataPosts && <Loading />}
        {dataPosts && dataPosts.status >= 300 && (
          <p>Erro encontrado... Error {dataPosts.status}</p>
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
            <NavPagination>
              {pagination > 1 && (
                <Pagination
                  onClick={() => {
                    setPagination(pagination - 1);
                  }}
                >
                  {"< Anterior"}
                </Pagination>
              )}
              {dataPosts.data.length === 20 && (
                <Pagination
                  onClick={() => {
                    setPagination(pagination + 1);
                  }}
                >
                  {"Próximo >"}
                </Pagination>
              )}
            </NavPagination>
            <MiracleDiv size={"28px"} />
          </Posts>
        )}
      </ContarinerFeed>
    </FeedPage>
  );
}
