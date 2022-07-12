import styled from "styled-components";

export const AdminHomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  max-height: 96vh;
  width: 96vw;
  gap: 8px;
  padding: 16px 0px;
  box-shadow: 0 0 0 4px rgba(252, 252, 253, 0.3),
    0 0 0 8px rgba(194, 78, 162, 0.3), 0 0 0 12px rgba(105, 83, 157, 0.3);
  border-radius: 8px;
  background-color: rgba(36, 36, 36, 0.8);
`;

export const Header = styled.header`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;
  align-items: center;
  user-select: none;
  @media screen and (max-width: 800px) {
    display: grid;
    justify-content: center;
    gap: 12px;
  }
`;

export const LineDiv = styled.hr`
  margin: 8px 0;
  border: 1px solid rgba(255, 255, 255, 0.3);
`;

export const TittleAdmin = styled.h1`
  font-size: 42px;
  text-align: center;
  text-shadow: 2px 2px #373147;
  user-select: none;
  text-align: center;
  font-weight: 900;
  color: #cfc9df;
  grid-area: 1/1/2/4;
  text-shadow: -0.5px -0.5px #3b233f, 0.5px 0.5px #3b233f, -0.5px 0.5px #3b233f,
    0.5px -0.5px #3b233f, 1px -1px #af7eaf, -1px -1px #af7eaf, 2px -2px #332c33,
    -2px -2px #332c33;
  @media screen and (max-width: 800px) {
    font-size: 32px;
  }
`;

export const Button = styled.h2`
  cursor: pointer;
  padding: 4px 8px;
  text-align: center;
  text-shadow: 2px 2px #373147;
  user-select: none;
  text-align: center;
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
    font-size: 24px;
    text-decoration: underline;
  }
`;

export const CardAdminContainer = styled.div`
  width: 92%;
  height: 60px;
  margin: 0 auto;
  background-color: aqua;
`;
