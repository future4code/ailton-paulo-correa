import styled from "styled-components";

export const AdminHomeContainer = styled.main`
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  min-width: 340px;
  width: 60vw;
  padding: 20px;
  background-color: #b3b3b3;
  gap: 8px;
`;

export const Button = styled.h2`
  cursor: pointer;
  :hover{
    text-decoration: underline;
  }
`

export const CardAdminContainer = styled.div`
  width: 92%;
  height: 60px;
  background-color: aqua;
` 