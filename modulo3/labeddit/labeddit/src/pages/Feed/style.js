import styled from "styled-components";
import { Button1, LineDivisor } from "../../components/Global/GeneralStyle";

export const ContarinerFeed = styled.main`
  display: flex;
  flex-direction: column;
  padding: 32px 32px 0px 32px;
  max-height: 100vh;
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
  margin-top: 12px;
  margin-bottom: 0px;
`;

export const Posts = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

export const Divisor50 = styled.div`
  min-height: 50px;
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

export const PostText = styled.p`
  font-family: "IBM Plex Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
`;

export const DivBoxs = styled.div`
  display: flex;
  gap: 11px;
`;

export const BoxInteraction = styled.div`
  border: 0.8px solid #ececec;
  border-radius: 28px;
  display: flex;
  gap: 14px;
  padding: 7px 12px;
`;
export const BoxComments = styled.div`
  border: 0.8px solid #ececec;
  border-radius: 28px;
  display: flex;
  gap: 10px;
  padding: 7px 12px;
`;

export const IconInteraction = styled.img`
  width: 15px;
  height: 14px;
`;

export const CountPost = styled.p`
  font-family: "IBM Plex Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  text-align: center;
  color: #6f6f6f;
`;
