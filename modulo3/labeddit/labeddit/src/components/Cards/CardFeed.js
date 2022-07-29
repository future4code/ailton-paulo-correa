import React, { useState } from "react";
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
import IconLikeVote from "../../assets/likeVote.png";
import IconUnlikeVote from "../../assets/unlikeVote.png";
import IconLike from "../../assets/like.png";
import IconUnlike from "../../assets/unlike.png";
import { goTo } from "../../routes/Coordinator";
import { useNavigate } from "react-router-dom";
import { MiracleDiv } from "../Global/GeneralStyle";
import { requestData } from "../../services/requestApi";

export default function CardFeed({
  post,
  page,
  setUpdatePost,
  updatePost,
  setCurrentPost,
}) {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [data, setData] = useState("");

  const onClickLike = async (vote) => {
    await requestData("put", `posts/${post.id}/votes`, vote, token, setData);
    if (setCurrentPost) {
      setCurrentPost("");
      setUpdatePost(!updatePost);
    }
    setUpdatePost(!updatePost);
  };

  const unvote = async () => {
    await requestData("delete", `posts/${post.id}/votes`, "", token, setData);
    if (setCurrentPost) {
      setCurrentPost("");
    }
    setUpdatePost(!updatePost);
  };

  return (
    <>
      <BoxPost>
        <SentBy>{`Enviado por: ${post.username}`}</SentBy>
        <PostText>{post.title}</PostText>
        <PostText>{post.body}</PostText>
        <DivBoxs>
          <BoxInteraction>
            {post.userVote !== 1 && (
              <IconInteraction
                src={IconLike}
                onClick={() => onClickLike({ direction: 1 })}
              />
            )}
            {post.userVote === 1 && (
              <IconInteraction src={IconLikeVote} onClick={unvote} />
            )}
            <CountPost>{post.voteSum ? post.voteSum : 0}</CountPost>
            {post.userVote === -1 && (
              <IconInteraction src={IconUnlikeVote} onClick={unvote} />
            )}
            {post.userVote !== -1 && (
              <IconInteraction
                src={IconUnlike}
                onClick={() => onClickLike({ direction: -1 })}
              />
            )}
          </BoxInteraction>
          {page === "post" && (
            <BoxComments>
              <IconInteraction src={IconComment} />
              <CountPost>{post.commentCount ? post.commentCount : 0}</CountPost>
            </BoxComments>
          )}
          {page !== "post" && (
            <BoxComments onClick={() => goTo(navigate, `post/${post.id}`)}>
              <IconInteraction src={IconComment} />
              <CountPost>{post.commentCount ? post.commentCount : 0}</CountPost>
            </BoxComments>
          )}
        </DivBoxs>
      </BoxPost>
      <MiracleDiv size={"10px"} />
    </>
  );
}
