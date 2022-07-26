import React from "react";
import Header from "../../components/Header/Header";
import {
  ButtonNewPost,
  ContarinerFeed,
  FeedPage,
  Posts,
  TextBoxPost,
} from "./style";
import CardFeed from "../../components/Cards/CardFeed";
import { LineDivisor, MiracleDiv } from "../../components/Global/GeneralStyle";

export default function Feed() {
  return (
    <FeedPage>
      <Header />
      <ContarinerFeed>
        <TextBoxPost placeholder="Escreva seu post..." />
        <ButtonNewPost>Postar</ButtonNewPost>
        <LineDivisor top={"12px"} bottom={"0px"}/>
        <Posts>
          <MiracleDiv size={"50px"} />
          <CardFeed />
          <MiracleDiv size={"50px"} />
        </Posts>
      </ContarinerFeed>
    </FeedPage>
  );
}
