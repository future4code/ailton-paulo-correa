import styled from "styled-components";

export const ErrorContainer = styled.main`
  display: flex;
  flex-direction: column;
  width: 96vw;  
  max-width: 700px;
  padding: 16px 0px;
  box-shadow: 0 0 0 4px rgba(252, 252, 253, 0.3),
    0 0 0 8px rgba(194, 78, 162, 0.3), 0 0 0 12px rgba(105, 83, 157, 0.3);
  border-radius: 8px;
  background-color: rgba(36, 36, 36, 0.8);
`;

export const Logo = styled.h1`
  user-select: none;
  text-align: center;
  font-size: 120px;
  font-weight: 900;
  color: #232323;
  text-shadow: -2px -2px #3b233f, 2px 2px #3b233f, -2px 2px #3b233f,
    2px -2px #3b233f, 3px -4px #af7eaf, -3px -4px #af7eaf, 4px -6px #332c33,
    -4px -6px #332c33;
  @media screen and (max-width: 480px) {
    transform: scale(0.8);
  }
`;

export const Button = styled.h2`
  cursor: pointer;
  margin: 0 auto;
  text-align: center;
  text-shadow: 2px 2px #373147;
  user-select: none;
  text-align: left;
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

export const TitleError = styled.h1`
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
