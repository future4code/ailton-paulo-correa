import styled from "styled-components";
import { Button1, LineDivisor } from "../../components/Global/GeneralStyle";

export const FeedPage = styled.main`
  height: 100vh;
  overflow: hidden;
  @media screen and (max-height: 720px) {
    height: auto;
  }
`;

export const ContarinerFeed = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px 32px 32px 32px;
  max-height: 100%;
`;

export const FormFeed = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TextBoxPost = styled.textarea`
  background: #ededed;
  border-radius: 12px;
  color: #000;
  font-family: "IBM Plex Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  height: 132px;
  min-height: 132px;
  padding: 15px 17px 0 17px;
  resize: none;
  width: 100%;
`;

export const ButtonNewPost = styled(Button1)`
  border-radius: 12px;
  min-height: 51px;
  font-family: "IBM Plex Sans";
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;
  margin-top: 12px;
`;

export const ButtonNewPostOFF = styled(ButtonNewPost)`
  background-image: linear-gradient(90deg, #555555, gray);
`;

export const LineDivisorPost = styled(LineDivisor)`
  margin-top: 12px;
  margin-bottom: 0px;
`;

export const Posts = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  max-height: 100%;
  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-track {
    background: unset;
    margin-top: 48px;
    margin-bottom: 30px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 50px;
    background: linear-gradient(#ff6489, #f9b24e);
  }
`;

export const InputTitle = styled.input`
  background: #ededed;
  border-radius: 12px;
  color: #000;
  font-family: "IBM Plex Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  height: 38px;
  line-height: 23px;
  padding-left: 17px;
`;

export const NavPagination = styled.div`
  display: flex;
  gap: 20px;
  margin: 0 auto;
`

export const Pagination = styled.nav`
  font-family: "IBM Plex Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  height: 38px;
  line-height: 23px;
  margin: 12px auto;
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
