import styled from "styled-components";

export const Button = styled.span`
  align-items: center;
  background-color: ${({ selected }) => (selected ? "#D18000" : "#ffffff")};
  border: none;
  border-radius: 4px;
  color: ${({ selected }) => (selected ? "#ffffff" : "#000000")};
  display: flex;
  font-weight: 700;
  font-size: 1rem;
  gap: 0.604rem;
  line-height: 1.5rem;
  padding: 0.5rem 1rem;
  text-transform: capitalize;
  @media screen and (max-width: 600px) {
    font-size: 0.875rem;
    line-height: 1.25rem;
    padding: ${({ selected }) =>
      selected ? "0.375rem 0.8rem" : "0.375rem 1rem"};
  }
`;

export const Img = styled.img`
  width: 1.042rem;
  height: 1.042rem;
`;
