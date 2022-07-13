import styled from "styled-components";

export const HomeContainer = styled.main`
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 120px;
  min-width: 340px;
  width: 60vw;
`;

export const ButtonLeft = styled.h2`
  width: 200px;
  cursor: pointer;
  border: #222321 solid 4px;
  background-color: #3b2340;
  padding: 8px 12px;
  border-radius: 8px;
  color: #cda9ce;
  user-select: none;
  :hover {
    border: #3b2340 solid 4px;
    background-color: #b579b7;
    transform: rotate(3deg) scale(1.3);
  }
`;

export const ButtonRight = styled.h2`
  width: 200px;
  cursor: pointer;
  border: #222321 solid 4px;
  background-color: #3b2340;
  padding: 8px 12px;
  border-radius: 8px;
  color: #cda9ce;
  user-select: none;
  :hover {
    border: #3b2340 solid 4px;
    background-color: #b579b7;
    transform: rotate(-3deg) scale(1.3);
  }
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

export const DivButton = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 180px;
  align-items: center;
  text-align: center;
  flex-wrap: wrap;
  justify-content: center;
  @media screen and (max-width: 480px) {
    gap: 40px;
  }
`;
