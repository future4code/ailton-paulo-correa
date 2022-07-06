import styled from "styled-components";

export const ContainerApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  background-color: #212121;
`;

export const ButtonClear = styled.p`
  margin-top: 20px;
  user-select: none;
  cursor: pointer;
  font-size: 20px;
  background-color: whitesmoke;
  padding: 8px 12px;
  border-radius: 8px;
  border: solid 2px gray;
  :hover {
    background-color: #bdbdbd;
  }
`;
