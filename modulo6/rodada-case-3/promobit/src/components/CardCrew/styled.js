import styled from "styled-components";

export const Container = styled.div`
  width: 10.875rem;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 560px) {
    width: 8.75rem;
  }
`;

export const Name = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.5rem;
  color: #ffffff;
`;

export const Job = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: #ffffff;
`;
