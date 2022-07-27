import React, { useState } from "react";
import IconLikeVote from "../../assets/likeVote.png";
import IconUnlikeVote from "../../assets/unlikeVote.png";
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
import { useNavigate } from "react-router-dom";
import { requestData } from "../../services/requestApi";

export default function CardComment({ comment, updatePost, setUpdatePost }) {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [data, setData] = useState("");

  const onClickLike = async (vote) => {
    await requestData(
      "put",
      `comments/${comment.id}/votes`,
      vote,
      token,
      setData
    );
    setUpdatePost(!updatePost);
  };

  const unvote = async () => {
    await requestData(
      "delete",
      `comments/${comment.id}/votes`,
      "",
      token,
      setData
    );
    setUpdatePost(!updatePost);
  };
  return (
    <>
      <BoxPost>
        <SentBy>{`Enviado por: ${comment.username}`}</SentBy>
        <PostText>{comment.body}</PostText>
        <DivBoxs>
          <BoxInteraction>
            {comment.userVote !== 1 && (
              <IconInteraction
                src={IconLike}
                onClick={() => onClickLike({ direction: 1 })}
              />
            )}
            {comment.userVote === 1 && (
              <IconInteraction src={IconLikeVote} onClick={unvote} />
            )}
            <CountPost>{comment.voteSum ? comment.voteSum : 0}</CountPost>
            {comment.userVote === -1 && (
              <IconInteraction src={IconUnlikeVote} onClick={unvote} />
            )}
            {comment.userVote !== -1 && (
              <IconInteraction
                src={IconUnlike}
                onClick={() => onClickLike({ direction: -1 })}
              />
            )}
          </BoxInteraction>
        </DivBoxs>
      </BoxPost>
      <MiracleDiv size={"10px"} />
    </>
  );
}
