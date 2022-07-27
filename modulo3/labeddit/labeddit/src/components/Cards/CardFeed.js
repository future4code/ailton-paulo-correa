import React from "react";
import {
  BoxComments,
  BoxInteraction,
  BoxPost,
  CountPost,
  DivBoxs,
  IconInteraction,
  PostText,
  SentBy,
} from "./style";
import IconComment from "../../assets/comments.png";
import IconLike from "../../assets/like.png";
import IconUnlike from "../../assets/unlike.png";
import { goTo } from "../../routes/Coordinator";
import { useNavigate } from "react-router-dom";
import { MiracleDiv } from "../Global/GeneralStyle";

export default function CardFeed({ post }) {
  const navigate = useNavigate();
  return (
    <>
      <BoxPost>
        <SentBy>{`Enviado por: ${post.username}`}</SentBy>
        <PostText>{post.title}</PostText>
        <PostText>{post.body}</PostText>
        <DivBoxs>
          <BoxInteraction>
            <IconInteraction src={IconLike} />
            <CountPost>{post.voteSum ? post.voteSum : 0}</CountPost>
            <IconInteraction src={IconUnlike} />
          </BoxInteraction>
          <BoxComments onClick={() => goTo(navigate, `post/${post.id}`)}>
            <IconInteraction src={IconComment} />
            <CountPost>{post.commentCount ? post.commentCount : 0}</CountPost>
          </BoxComments>
        </DivBoxs>
      </BoxPost>
      <MiracleDiv size={"10px"} />
    </>
  );
}
