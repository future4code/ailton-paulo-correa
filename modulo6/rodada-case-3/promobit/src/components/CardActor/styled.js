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
  height: 13.875rem;
  width: 10.938rem;
`;
