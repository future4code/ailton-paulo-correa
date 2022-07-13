import styled from "styled-components";

export const LoginContainer = styled.main`
  display: flex;
  flex-direction: column;
  width: 96vw;
  max-width: 700px;
  padding: 8px 0px;
  box-shadow: 0 0 0 4px rgba(252, 252, 253, 0.3),
    0 0 0 8px rgba(194, 78, 162, 0.3), 0 0 0 12px rgba(105, 83, 157, 0.3);
  border-radius: 8px;
  background-color: rgba(36, 36, 36, 0.8);
`;

export const Button = styled.h2`
  width: 160px;
  user-select: none;
  background-color: #c8a6cc;
  padding: 8px 12px;
  border-radius: 16px;
  text-align: center;
  cursor: pointer;
  :hover {
    background-color: #977aa8;
    text-decoration: underline;
  }
`;

export const TitleLogin = styled.h2`
  font-size: 42px;
  text-align: center;
  margin-bottom: 16px;
  text-shadow: 2px 2px #373147;
  user-select: none;
  text-align: center;
  font-weight: 900;
  color: #cfc9df;
  text-shadow: -0.5px -0.5px #3b233f, 0.5px 0.5px #3b233f, -0.5px 0.5px #3b233f,
    0.5px -0.5px #3b233f, 1px -1px #af7eaf, -1px -1px #af7eaf, 2px -2px #332c33,
    -2px -2px #332c33;
`;

export const DivInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const DivButton = styled.div`
  padding-bottom: 16px;
  display: flex;
  justify-content: space-around;
`;

export const Input = styled.input`
  box-shadow: 0 0 0 1px rgba(252, 252, 253, 0.3),
    0 0 0 2px rgba(194, 78, 162, 0.3), 0 0 0 4px rgba(105, 83, 157, 0.3);
  height: 32px;
  border-radius: 8px;
  font-size: 20px;
  width: 92%;
  margin: 0 auto;
  max-width: 680px;
  text-align: center;
  :hover {
    background-color: #cfc9df;
  }
`;
