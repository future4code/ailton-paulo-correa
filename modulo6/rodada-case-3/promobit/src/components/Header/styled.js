import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  background: #5c16c5;
  align-items: center;
  height: 3.5rem;
  @media screen and (max-width: 600px) {
    justify-content: center;
  }
`;

export const Space = styled.span`
  height: 100%;
  width: 7rem;
  @media screen and (max-width: 600px) {
    width: 0;
  }
`;

export const Img = styled.img`
  height: 1.5rem;
`;
