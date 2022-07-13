import styled from "styled-components";

export const TripDetailsContainer = styled.main`
  display: flex;
  flex-direction: column;
  width: 96vw;
  max-width: 700px;
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
  background-color: #232323;
  border: #977aa8 solid 1px;
  padding: 8px 12px;
  border-radius: 16px;
  text-align: center;
  cursor: pointer;
  :hover {
    background-color: #977aa8;
    text-decoration: underline;
  }
`;

export const TitleTD = styled.h2`
  margin: 0 auto;
`

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
  :hover {
    text-decoration: underline;
  }
`;
