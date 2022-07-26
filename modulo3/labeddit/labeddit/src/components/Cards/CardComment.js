import React from "react";
import IconLike from "../../assets/like.png";
import IconUnlike from "../../assets/unlike.png";
import { MiracleDiv } from "../Global/GeneralStyle";
import {
  BoxInteraction,
  BoxPost,
  CountPost,
  DivBoxs,
  IconInteraction,
  PostText,
  SentBy,
} from "./style";

export default function CardComment() {
  return (
    <>
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
        </DivBoxs>
      </BoxPost>
      <MiracleDiv size={"10px"} />
    </>
  );
}
