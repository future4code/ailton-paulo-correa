import React from "react";
import Header from "../../components/Header/Header";
import IconComment from "../../assets/comments.png";
import IconLike from "../../assets/like.png";
import IconUnlike from "../../assets/unlike.png";
import {
  BoxComments,
  BoxInteraction,
  BoxPost,
  ButtonNewPost,
  ContarinerFeed,
  CountPost,
  DivBoxs,
  Divisor50,
  IconInteraction,
  LineDivisorPost,
  Posts,
  PostText,
  SentBy,
  TextBoxPost,
} from "./style";

export default function Feed() {
  return (
    <>
      <Header />
      <ContarinerFeed>
        <TextBoxPost placeholder="Escreva seu post..." />
        <ButtonNewPost>Postar</ButtonNewPost>
        <LineDivisorPost />
        <Posts>
          <Divisor50/>
          <BoxPost>
            <SentBy>Enviado por: User</SentBy>
            <PostText>
              Porque a maioria dos desenvolvedores usam Linux? ou as empresas de
              tecnologia usam Linux?
            </PostText>
            <DivBoxs>
              <BoxInteraction>
                <IconInteraction src={IconLike} />
                <CountPost>0</CountPost>
                <IconInteraction src={IconUnlike} />
              </BoxInteraction>
              <BoxComments>
                <IconInteraction src={IconComment} />
                <CountPost>0</CountPost>
              </BoxComments>
            </DivBoxs>
          </BoxPost>
        </Posts>
      </ContarinerFeed>
    </>
  );
}
