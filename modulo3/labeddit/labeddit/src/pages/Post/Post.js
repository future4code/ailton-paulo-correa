import React from "react";
import Header from "../../components/Header/Header";
import {
  ButtonNewComment,
  Comments,
  ContainerPost,
  PostPage,
  TextBoxComment,
} from "./style";
import CardFeed from "../../components/Cards/CardFeed";
import { LineDivisor, MiracleDiv } from "../../components/Global/GeneralStyle";
import CardComment from "../../components/Cards/CardComment";

export default function Post() {
  return (
    <PostPage>
      <Header page={"post"}/>
      <ContainerPost>
        <CardFeed />
        <TextBoxComment placeholder="Adicionar comentário" />
        <ButtonNewComment>Responder</ButtonNewComment>
        <LineDivisor top={"18px"} bottom={"0px"} />
        <Comments>
          <MiracleDiv size={"36px"} />
          <CardComment />
          <MiracleDiv size={"36px"} />
        </Comments>
      </ContainerPost>
    </PostPage>
  );
}
