import React from "react";
import Header from "../../components/Header/Header";
import {
  ButtonNewPost,
  ContarinerFeed,
  Divisor50,
  FeedPage,
  LineDivisorPost,
  Posts,
  TextBoxPost,
} from "./style";
import CardFeed from "../../components/Cards/CardFeed";

export default function Feed() {
  return (
    <FeedPage>
      <Header />
      <ContarinerFeed>
        <TextBoxPost placeholder="Escreva seu post..." />
        <ButtonNewPost>Postar</ButtonNewPost>
        <LineDivisorPost />
        <Posts>
          <Divisor50 />
          <CardFeed />
          <CardFeed />
          <CardFeed />
          <CardFeed />
          <CardFeed />
          <CardFeed />
          <CardFeed />
          <CardFeed />
          <CardFeed />
          <CardFeed />
          <CardFeed />
          <CardFeed />
          <Divisor50 />
        </Posts>
      </ContarinerFeed>
    </FeedPage>
  );
}
