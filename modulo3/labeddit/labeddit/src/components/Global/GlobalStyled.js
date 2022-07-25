import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  user-select: none;
}
#root,body{
  min-height: 100vh;
  max-width: 100vw;
  background-color: #ffffff;
}
#root{
  display: flex;
  flex-direction: column;
}
`;
