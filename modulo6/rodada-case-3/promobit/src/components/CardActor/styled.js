import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0.5rem;
  gap: 1rem;
  min-width: 11.875rem;
  max-width: 11.875rem;
  min-height: 21rem;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
`;

export const PhotoActor = styled.span`
  background-image: url(${({ img }) => img});
  background-size: cover;
  background-position: center top;
  border-radius: 4px;
  height: 13.875rem;
  width: 10.938rem;
`;

export const Name = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.875rem;
  color: #131313;
`;

export const Character = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5rem;
  color: #131313;
`;
