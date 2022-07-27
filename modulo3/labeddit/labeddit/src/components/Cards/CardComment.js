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

export default function CardComment({ comment }) {
  return (
    <>
      <BoxPost>
        <SentBy>{`Enviado por: ${comment.username}`}</SentBy>
        <PostText>{comment.body}</PostText>
        <DivBoxs>
          <BoxInteraction>
            <IconInteraction src={IconLike} />
            <CountPost>{comment.voteSum}</CountPost>
            <IconInteraction src={IconUnlike} />
          </BoxInteraction>
        </DivBoxs>
      </BoxPost>
      <MiracleDiv size={"10px"} />
    </>
  );
}
