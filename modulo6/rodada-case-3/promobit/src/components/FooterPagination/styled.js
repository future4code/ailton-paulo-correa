import styled from "styled-components";

export const Pagination = styled.footer`
  background-color: #e5e5e5;
  display: flex;
  gap: 1rem;
  justify-content: center;
  padding-bottom: 3rem;
  padding-top: 1rem;
`;

export const Pages = styled.span`
  color: #5c16c5;
  font-weight: 700;
  padding: 0 0.75rem;
  text-decoration: ${({ current = false }) => current && "underline"};
  cursor: pointer;
`;
