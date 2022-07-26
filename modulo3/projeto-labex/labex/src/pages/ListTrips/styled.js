import styled from "styled-components";

export const TripsContainer = styled.main`
  display: flex;
  flex-direction: column;
  max-height: 96vh;
  width: 96vw;
  padding: 8px 0px;
  box-shadow: 0 0 0 4px rgba(252, 252, 253, 0.3),
    0 0 0 8px rgba(194, 78, 162, 0.3), 0 0 0 12px rgba(105, 83, 157, 0.3);
  border-radius: 8px;
  background-color: rgba(36, 36, 36, 0.8);
`;

export const Header = styled.header`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-between;
  align-items: center;
  user-select: none;
  @media screen and (max-width: 800px) {
    display: grid;
    justify-content: center;
    gap: 12px;
  }
`;

export const TitleListTrips = styled.h2`
  font-size: 42px;
  text-align: center;
  text-shadow: 2px 2px #373147;
  user-select: none;
  text-align: center;
  font-weight: 900;
  color: #cfc9df;
  grid-area: 1/1/2/3;
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

export const Logo = styled.h1`
  user-select: none;
  text-align: center;
  font-size: 40px;
  font-weight: 900;
  color: #232323;
  text-shadow: -2px -2px #3b233f, 2px 2px #3b233f, -2px 2px #3b233f,
    2px -2px #3b233f, 3px -4px #af7eaf, -3px -4px #af7eaf, 4px -6px #332c33,
    -4px -6px #332c33;
`;

export const LineDiv = styled.hr`
  margin: 8px 0;
  border: 1px solid rgba(255, 255, 255, 0.3);
`;

export const BoxCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 12px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  background-color: rgba(87, 77, 75, 0.2);
  border-radius: 8px;
  gap: 20px;
  width: 98%;
  margin: 0 auto;
  overflow: auto;
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

/////// CardListTrip

export const ContainerCardLT = styled.div`
  background-color: rgba(35, 35, 35, 0.7);
  min-height: 200px;
  width: 320px;
  padding: 8px;
  border-radius: 8px;
  word-wrap: break-word;
  word-break: break-all;
  color: #cfc9df;
  font-weight: 500;
  :hover {
    font-weight: 900;
    background-color: rgba(35, 35, 35, 0.98);
  }
`;

export const TitleCardLT = styled.h2`
  font-size: 22px;
  text-align: center;
  margin-bottom: 16px;
  text-shadow: 2px 2px #373147;
  text-align: center;
  font-weight: 900;
  color: #cfc9df;
  text-shadow: -0.5px -0.5px #3b233f, 0.5px 0.5px #3b233f, -0.5px 0.5px #3b233f,
    0.5px -0.5px #3b233f, 1px -1px #af7eaf, -1px -1px #af7eaf,
    1.5px -1.5px #332c33, -1.5px -1.5px #332c33;
`;
