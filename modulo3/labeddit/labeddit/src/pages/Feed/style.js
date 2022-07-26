import styled from "styled-components";
import { Button1, LineDivisor } from "../../components/Global/GeneralStyle";

export const FeedPage = styled.main`
  height: 100vh;
  max-height: 100vh;
  overflow: hidden;
`;

export const ContarinerFeed = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px 32px 32px 32px;
  height: 100%;
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
  width: 100%;
  resize: none;
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

export const Divisor50 = styled.div`
  min-height: 50px;
`;
