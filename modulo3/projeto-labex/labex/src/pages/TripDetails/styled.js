import styled from "styled-components";

export const TripDetailsContainer = styled.main`
  display: flex;
  flex-direction: column;
  width: 96vw;
  /* max-height: 96vh; */
  max-width: 700px;
  gap: 8px;
  padding: 12px;
  box-shadow: 0 0 0 4px rgba(252, 252, 253, 0.3),
    0 0 0 8px rgba(194, 78, 162, 0.3), 0 0 0 12px rgba(105, 83, 157, 0.3);
  border-radius: 8px;
  background-color: rgba(36, 36, 36, 0.8);
`;

export const ButtonDetail = styled.h4`
  font-weight: 900;
  width: 92px;
  user-select: none;
  border: #977aa8 solid 1px;
  padding: 8px 12px;
  border-radius: 16px;
  text-align: center;
  background-color: #232323;
  cursor: pointer;
  :hover {
    background-color: #977aa8;
    text-decoration: underline;
  }
`;

export const BoxDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 2px solid rgba(255, 255, 255, 0.3);
  background-color: rgba(87, 77, 75, 0.2);
  gap: 8px;
  width: 98%;
  max-width: 98%;
  margin: 0 auto;
  overflow: auto;
  padding: 12px;
  font-size: 22px;
  border-radius: 8px;
  color: #cfc9df;
  font-weight: 900;
  ::-webkit-scrollbar {
    width: 12px;
  }
  ::-webkit-scrollbar-track {
    background: #866999;
  }
  ::-webkit-scrollbar-thumb {
    background: #533557;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #694f9f;
  }
`;

export const BoxCandidates = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 2px solid rgba(255, 255, 255, 0.3);
  background-color: #222222;
  width: 100%;
  min-height: 36px;
  margin: 0 auto;
  padding: 12px;
  font-size: 22px;
  border-radius: 8px;
  word-wrap: break-word;
  color: #cfc9df;
  font-weight: 900;
  h3 {
    margin: 0 auto;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  background-color: #222222;
  width: 100%;
  min-height: 36px;
  margin: 0 auto;
  overflow: auto;
  padding: 12px;
  max-height: 280px;
  font-size: 22px;
  border-radius: 8px;
  color: #cfc9df;
  font-weight: 900;
  ::-webkit-scrollbar {
    width: 12px;
  }
  ::-webkit-scrollbar-track {
    background: #866999;
  }
  ::-webkit-scrollbar-thumb {
    background: #533557;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #694f9f;
  }
  h3 {
    margin: 0 auto;
  }
`;

export const TitleTD = styled.h2`
  font-size: 42px;
  text-align: center;
  text-shadow: 2px 2px #373147;
  user-select: none;
  text-align: center;
  font-weight: 900;
  color: #cfc9df;
  text-shadow: -0.5px -0.5px #3b233f, 0.5px 0.5px #3b233f, -0.5px 0.5px #3b233f,
    0.5px -0.5px #3b233f, 1px -1px #af7eaf, -1px -1px #af7eaf, 2px -2px #332c33,
    -2px -2px #332c33;
  @media screen and (max-width: 800px) {
    font-size: 32px;
  }
`;

export const BoxButton = styled.div`
  display: flex;
  gap: 20px;
  padding: 0 20px;
`;

export const TitleCard = styled.h2`
  font-size: 24px;
  text-shadow: 2px 2px #373147;
  font-weight: 900;
  color: #cfc9df;
  text-shadow: -0.5px -0.5px #3b233f, 0.5px 0.5px #3b233f, -0.5px 0.5px #3b233f,
    0.5px -0.5px #3b233f, 1px -1px #af7eaf, -1px -1px #af7eaf,
    1.5px -1.5px #332c33, -1.5px -1.5px #332c33;
`;

export const Button = styled.h2`
  cursor: pointer;
  padding: 4px 8px;
  text-align: center;
  text-shadow: 2px 2px #373147;
  user-select: none;
  text-align: left;
  margin-left: 8px;
  font-size: 32px;
  font-weight: 900;
  color: #cfc9df;
  text-shadow: -0.5px -0.5px #3b233f, 0.5px 0.5px #3b233f, -0.5px 0.5px #3b233f,
    0.5px -0.5px #3b233f, 1px -1px #af7eaf, -1px -1px #af7eaf, 2px -2px #332c33,
    -2px -2px #332c33;
  :hover {
    text-decoration: underline;
  }
  @media screen and (max-width: 800px) {
    font-size: 20px;
    text-decoration: underline;
  }
`;

export const DropCandidates = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: fit-content;
  padding: 8px;
`;

export const TitleCandidate = styled.h3``;

export const Show = styled.p`
  font-size: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 3px;
  border-radius: 50px;
  border: #977aa8 solid 1px;
  width: 30px;
  height: 30px;
  user-select: none;
  background-color: #232323;
  cursor: pointer;
  transition: 0.5s;
  transform: ${(props) => (props.drop ? "rotate(90deg)" : "none")};
  :hover {
    background-color: #977aa8;
  }
`;

export const Candidate = styled.div`
  width: 100%;
  display: flex;
  box-shadow: 0 0 4px black;
  padding: 8px 4px;
  gap: 6px;
  p {
    flex-grow: 1;
  }
`;

export const ButtonDecide = styled.strong`
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 8px;
  border-radius: 50px;
  border: #977aa8 solid 1px;
  user-select: none;
  background-color: #232323;
  cursor: pointer;
  transition: 0.5s;
  transform: ${(props) => (props.drop ? "rotate(90deg)" : "none")};
  :hover {
    background-color: #977aa8;
  }
`;

export const Show2 = styled.p`
  font-size: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 3px;
  border-radius: 50px;
  border: #977aa8 solid 1px;
  width: 30px;
  height: 30px;
  user-select: none;
  background-color: #232323;
  cursor: pointer;
  transition: 0.5s;
  transform: ${(props) => (props.drop ? "rotate(90deg)" : "none")};
  :hover {
    background-color: #977aa8;
  }
`;
