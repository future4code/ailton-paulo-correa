import styled from "styled-components";
import { Button1, LineDivisor } from "../../components/Global/GeneralStyle";

export const ContarinerFeed = styled.main`
  display: flex;
  flex-direction: column;
  padding: 32px 32px 0px 32px;
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
  padding: 15px 17px 0 17px;
  width: 100%;
  resize: none;
`;

export const ButtonNewPost = styled(Button1)`
  border-radius: 12px;
  font-family: "IBM Plex Sans";
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;
  margin-top: 12px;
`;

export const LineDivisorPost = styled(LineDivisor)`
  margin: 12px 0 50px 0;
`;

export const BoxPost = styled.div`
  align-items: flex-start;
  background: #fbfbfb;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: 9px 10px;
  margin-bottom: 10px;
  min-height: 167px;
`;

export const SentBy = styled.p`
  color: #6f6f6f;
  font-family: "IBM Plex Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
`;
