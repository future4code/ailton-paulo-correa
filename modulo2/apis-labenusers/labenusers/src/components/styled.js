import styled from "styled-components";
export const Container = styled.div`
  max-width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 60px 1fr 100px;
  justify-content: center;
  align-items: center;
`;
export const Header = styled.header`
  grid-area: 1/1/2/2;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 8px gray;
  height: 100%;
  ul {
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;
    list-style: none;
  }
  li {
    :hover {
      text-decoration: underline;
    }
  }
`;
export const Main = styled.main`
  grid-area: 2/1/3/2;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;
export const Box = styled.div`
  min-width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: white;
  padding: 20px;
  gap: 12px;
  border: 1px solid gray;
  border-radius: 12px;
  box-shadow: 0 0 8px black;
  button {
    width: 180px;
    margin: 0 auto;
  }
  h3 {
    margin: 0 auto;
  }
`;
export const ButtonBox = styled.div`
  display: flex;
  gap: 20px;
  h3 {
    user-select: none;
    width: min-content;
    font-weight: 500;
    padding: 0 8px;
    border-radius: 12px;
    box-shadow: 0 0 4px black;
    margin: 0;
    word-wrap: normal;
    word-break: normal;
    :hover {
      background-color: #c4c4c4;
    }
  }
`;
export const Footer = styled.footer`
  grid-area: 3/1/4/2;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 8px gray;
  height: 100%;
`;
export const Input = styled.input`
  width: 320px;
`;
export const DivUsers = styled.div`
  display: grid;
  padding: 4px 12px;
  grid-template-columns: 4fr 60px 30px;
  grid-template-rows: 1fr;
  align-items: center;
  justify-content: center;
  max-width: 70vw;
  min-width: 300px;
  word-wrap: break-word;
  word-break: break-all;
  gap: 8px;
  p {
    user-select: none;
    width: min-content;
    color: red;
    font-size: 13px;
    padding: 0 8px;
    border-radius: 12px;
    box-shadow: 0 0 4px black;
    margin: 0;
    :hover {
      background-color: #c4c4c4;
    }
  }
  h5 {
    user-select: none;
    width: min-content;
    font-weight: 500;
    padding: 0 8px;
    border-radius: 12px;
    box-shadow: 0 0 4px black;
    margin: 0;
    word-wrap: normal;
    word-break: normal;
    :hover {
      background-color: #c4c4c4;
    }
  }
`;
export const AvisoCerto = styled.p`
  padding: 0;
  margin: 0;
  color: green;
`;
export const AvisoErro = styled.p`
  padding: 0;
  margin: 0;
  color: red;
`;
