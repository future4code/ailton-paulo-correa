import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import CardFeed from "../../components/Cards/CardFeed";
import { LineDivisor, MiracleDiv } from "../../components/Global/GeneralStyle";
import CardComment from "../../components/Cards/CardComment";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../components/Global/GlobalContext";
import {
  ButtonNewComment,
  ButtonNewCommentOFF,
  Comments,
  ContainerPost,
  PostPage,
  TextBoxComment,
  NotFoundPost,
} from "./style";
import { useForm } from "../../hooks/useForm";
import { requestData } from "../../services/requestApi";
import Loading from "../../components/Loading/Loading";

export default function Post() {
  const token = localStorage.getItem("token");
  const [comments, setComments] = useState("");
  const [currentPost, setCurrentPost] = useState("");
  const [data, setData] = useState("");
  const [renderPost, setRenderPost] = useState("");
  const { dataPosts, updatePost, setUpdatePost } = useContext(GlobalContext);
  const { form, onChange, clearForm } = useForm({ body: "" });
  const params = useParams();

  useEffect(() => {
    if (dataPosts && !currentPost) {
      setRenderPost("");
      const getCurrentPost = async () => {
        const res = await dataPosts?.data?.filter((item) => {
          return item.id === params.id;
        });
        const exists = await dataPosts?.data?.map((item) => {
          return item.id === params.id;
        });
        if (!exists.includes(true)) {
          setRenderPost(false);
        } else {
          setRenderPost(true);
        }
        setCurrentPost(res[0]);
      };
      getCurrentPost();
    }
    if (dataPosts && currentPost) {
      const getComments = async () => {
        await requestData(
          "get",
          `posts/${params.id}/comments`,
          "",
          token,
          setComments
        );
      };
      getComments();
    }
  }, [dataPosts, currentPost]);

  useEffect(() => {
    if (!!data && token) {
      setUpdatePost(!updatePost);
      clearForm();
    }
  }, [data]);

  const newPost = async () => {
    if (dataPosts && form.body) {
      await requestData(
        "post",
        `posts/${params.id}/comments`,
        form,
        token,
        setData
      );
    }
  };
  return (
    <PostPage>
      <Header page={"post"} />
      {renderPost === false && (
        <NotFoundPost>Falha ao encontrar a postagem!</NotFoundPost>
      )}
      {renderPost === "" && !currentPost?.id && <Loading />}
      {!!renderPost && !!currentPost?.id && (
        <ContainerPost>
          <CardFeed
            page={"post"}
            post={currentPost}
            updatePost={updatePost}
            setUpdatePost={setUpdatePost}
            setCurrentPost={setCurrentPost}
          />
          <TextBoxComment
            name="body"
            value={form.body}
            onChange={onChange}
            placeholder="Adicionar comentário"
          />
          {!!(dataPosts && form.body && token) || (
            <ButtonNewCommentOFF>Responder</ButtonNewCommentOFF>
          )}
          {!!(dataPosts && form.body && token) && (
            <ButtonNewComment onClick={newPost}>Responder</ButtonNewComment>
          )}
          <LineDivisor top={"18px"} bottom={"0px"} />
          {!comments && <Loading />}
          {comments && (
            <Comments>
              <MiracleDiv size={"36px"} />
              {comments.data?.map((item) => {
                return (
                  <CardComment
                    key={item.id}
                    comment={item}
                    updatePost={updatePost}
                    setUpdatePost={setUpdatePost}
                    setCurrentPost={setCurrentPost}
                  />
                );
              })}
              <MiracleDiv size={"36px"} />
            </Comments>
          )}
        </ContainerPost>
      )}
    </PostPage>
  );
}
