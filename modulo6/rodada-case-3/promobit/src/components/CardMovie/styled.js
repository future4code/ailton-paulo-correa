import styled from "styled-components";

export const Container = styled.div`
  cursor: pointer;
  min-height: 20rem;
  width: 11rem;
  @media screen and (max-width: 600px) {
    min-height: 17.5rem;
    width: 9.667rem;
  }
`;

export const Poster = styled.div`
  height: 16.5rem;
  width: 100%;
  background-image: url(${({ img }) => img});
  background-size: cover;
  background-position: center;
  border-radius: 4px;
  margin-bottom: 0.5rem;
  @media screen and (max-width: 600px) {
    height: 14.5rem;
  }
`;

export const Title = styled.p`
  color: #000000;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.5rem;
`;

export const ReleaseDate = styled.p`
  color: #646464;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
`;
