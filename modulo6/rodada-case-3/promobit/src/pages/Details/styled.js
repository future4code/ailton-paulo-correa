import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
`;

export const BoxInfo = styled.div`
  background: #2d0c5e;
  display: flex;
  gap: 2.06rem;
  min-height: 37.5rem;
  padding: 0 7rem;
  width: 100%;
  @media screen and (max-width: 1040px) {
    width: auto;
    flex-direction: column;
    padding: 0 1rem;
    padding-bottom: 3.5rem;
  }
`;

export const Poster = styled.img`
  position: relative;
  height: 35.875rem;
  bottom: -2.875rem;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 8px;
  @media screen and (min-width: 561px) and (max-width: 1040px) {
    bottom: -3.3rem;
  }
  @media screen and (max-width: 560px) {
    height: 17.5rem;
  }
`;

export const DivPoster = styled.div`
  display: flex;
  align-items: flex-end;
  padding-top: 2rem;
  justify-content: center;
  @media screen and (max-width: 1040px) {
    padding: 0;
  }
`;

export const BoxSinopse = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 42.75rem;
  padding-top: 4.5rem;
`;

export const Title = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 2rem;
  line-height: 2.375rem;
  letter-spacing: -0.005em;
  color: #ffffff;
`;

export const Details = styled.span`
  color: #ffffff;
  font-style: normal;
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 1.5rem;
`;

export const BoxRating = styled.div`
  display: flex;
  gap: 0.725rem;
`;

export const Rating = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 1rem;
  line-height: 2.375rem;
  letter-spacing: -0.005em;
  color: #14ff00;
`;
export const RatingText = styled.span`
  color: #ffffff;
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.125rem;
  width: 6.375rem;
`;

export const BoxSinopseText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const SinopseTitle = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.5rem;
  color: #ffffff;
`;

export const SinopseText = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5rem;
  letter-spacing: -0.005em;
  color: #dddddd;
`;

export const BoxCrews = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  @media screen and (max-width: 560px) {
    gap: 1.625rem;
  }
`;

export const Space = styled.span`
  height: ${({ space }) => `${space}rem`};
`;

export const SectionDetails = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 7rem;
  @media screen and (max-width: 1040px) {
    padding: 0;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const DetailsTitle = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 1.75rem;
  line-height: 2rem;
  letter-spacing: -0.005em;
  color: #131313;
  @media screen and (max-width: 1040px) {
    padding: 0 1rem;
  }
`;

export const ListCast = styled.div`
  display: flex;
  gap: 1rem;
  overflow: auto;
  padding-bottom: 2rem;
  ::-webkit-scrollbar {
    height: 0.75rem;
  }
  ::-webkit-scrollbar-track {
    background: #dddddd;
    border-radius: 6.25rem;
  }
  ::-webkit-scrollbar-thumb {
    min-width: 25rem;
    height: 0.75rem;
    background: #adadad;
    border-radius: 6.25rem;
  }
  @media screen and (max-width: 1040px) {
    padding: 0 1rem;
    padding-bottom: 2rem;
    ::-webkit-scrollbar-thumb {
      min-width: 4rem;
    }
  }
`;
