import styled from "styled-components";
import { Button1 } from "../../components/Global/GeneralStyle";
import { ContarinerFeed, Posts, TextBoxPost } from "../Feed/style";

export const PostPage = styled.main`
  height: 100vh;
  overflow: hidden;
  @media screen and (max-height: 780px) {
    height: auto;
  }
`;

export const NotFoundPost = styled.p`
  font-family: "IBM Plex Sans";
  font-weight: 700;
  font-size: 22px;
  line-height: 23px;
  margin-top: 40px;
  text-align: center;
`;

export const ContainerPost = styled(ContarinerFeed)`
  padding-top: 28px;
  @media screen and (min-width: 800px) {
    width: 800px;
    margin: 0 auto;
  }
`;

export const TextBoxComment = styled(TextBoxPost)`
  margin-top: 2px;
`;

export const ButtonNewComment = styled(Button1)`
  border-radius: 12px;
  min-height: 51px;
  font-family: "IBM Plex Sans";
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;
  margin-top: 8px;
`;
export const ButtonNewCommentOFF = styled(ButtonNewComment)`
  background-image: linear-gradient(90deg, #555555, gray);
  cursor: no-drop;
`;

export const Comments = styled(Posts)``;
