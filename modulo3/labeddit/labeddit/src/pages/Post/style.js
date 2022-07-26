import styled from "styled-components";
import { Button1 } from "../../components/Global/GeneralStyle";
import { ContarinerFeed, Posts, TextBoxPost } from "../Feed/style";

export const PostPage = styled.main`
  height: 100vh;
  max-height: 100vh;
  overflow: hidden;
`;

export const ContainerPost = styled(ContarinerFeed)`
  padding-top: 28px;
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

export const Comments = styled(Posts)``;
