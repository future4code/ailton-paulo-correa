import styled from "styled-components";

export const Container = styled.main`
  background-color: #e5e5e5;
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const FilterBox = styled.section`
  background-color: #2d0c5e;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 28.125rem;
  padding: 0 1rem;
  width: 100%;
  @media screen and (max-width: 600px) {
    align-items: flex-start;
  }
`;

export const Space = styled.span`
  height: 2.5rem;
`;

export const BoxDescription = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  @media screen and (max-width: 600px) {
    justify-content: flex-start;
  }
`;

export const Description = styled.p`
  color: #ffffff;
  font-size: 3rem;
  font-weight: 700;
  letter-spacing: -0.15rem;
  line-height: 3.5rem;
  max-width: 48.75rem;
  text-align: center;
  @media screen and (max-width: 600px) {
    font-size: 1.5rem;
    letter-spacing: 0;
    line-height: 1.75rem;
    max-width: 17.5rem;
    text-align: start;
  }
`;

export const FilterTitle = styled.p`
  font-size: 0.875rem;
  font-weight: 700;
  color: #ffffff;
  line-height: 1.25rem;
`;

export const GenreBox = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
  max-width: 77.5rem;
  padding: 0.5rem 0;
  @media screen and (max-width: 600px) {
    justify-content: flex-start;
  }
`;

export const MoviesSection = styled.section`
  column-gap: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(11rem, min-content));
  justify-content: space-between;
  max-width: 100%;
  padding: 2rem 0;
  row-gap: 3rem;
  /* width: fit-content; */
  @media screen and (max-width: 600px) {
    column-gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(9.667rem, min-content));
    max-width: 100%;
    padding: 2rem 0;
    row-gap: 2rem;
  }
`;

export const DivGrid = styled.div`
  display: flex;
  justify-content: space-between;
  width: 88%;
  @media screen and (max-width: 600px) {
    justify-content: space-evenly;
    width: 100%;
  }
`;
