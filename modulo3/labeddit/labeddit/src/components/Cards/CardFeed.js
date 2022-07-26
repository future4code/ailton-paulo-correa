import React from "react";
import { BoxComments, BoxInteraction, BoxPost, CountPost, DivBoxs, IconInteraction, PostText, SentBy } from "./style";
import IconComment from "../../assets/comments.png";
import IconLike from "../../assets/like.png";
import IconUnlike from "../../assets/unlike.png";

export default function CardFeed() {
  return (
    <BoxPost>
      <SentBy>{`Enviado por: ${"User"}`}</SentBy>
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
  );
}
