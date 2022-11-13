import styled from "styled-components";

export const Container = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 4rem;
  padding: 4rem 0;
`;

export const Img = styled.div`
  background-image: url(${({ image }) => image});
  background-position: center;
  background-size: cover;
  border-radius: 100%;
  height: 90vw;
  max-height: 30rem;
  max-width: 30rem;
  width: 90vw;
`;

export const Text = styled.p`
  font-size: 2rem;
  font-weight: 700;
  max-width: 24rem;
  text-align: center;
  width: 90vw;
`;
