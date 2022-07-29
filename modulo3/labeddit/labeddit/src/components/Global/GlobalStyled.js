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
  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-track {
    background: unset;
    margin-top: 48px;
    margin-bottom: 30px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 50px;
    background: linear-gradient(#ff6489, #f9b24e);
  }
}
#root{
  display: flex;
  flex-direction: column;
}
`;
