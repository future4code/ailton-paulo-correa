import styled from "styled-components";

export const ContainerMatches = styled.div`
  width: 440px;
  min-height: 600px;
  height: 84vh;
  border-radius: 4px;
  border: #252422 solid 1px;
  box-shadow: 0 0 8px #252422;
  background-color: #fffcf2;
  display: flex;
  flex-direction: column;
  user-select: none;
  @media screen and (max-width: 480px) {
    height: 100vh;
    width: 100vw;
  }
`;

export const LogoImg = styled.img`
  width: 36px;
`;

export const Header = styled.header`
  border-bottom: solid 1px #252422;
  height: 82px;
  display: grid;
  grid-template-columns: 88px 1fr 88px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ec5569;
  .logo {
    grid-area: 1/2/2/3;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export const Menu = styled.div`
  height: 58px;
  width: 58px;
  font-size: 30px;
  font-weight: 900;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-left: 18px;
  padding: 8px 4px;
  border-radius: 50px;
  background-color: #f5bfd6;
  box-shadow: 0 0 1px black;
  cursor: pointer;
  p {
    font-size: 12px;
  }
  img {
    width: 28px;
  }
  :hover {
    background-color: #ffa2c9;
  }
  :active {
    background-color: #f5bfd6;
  }
`;

// ListMatches

export const ContainerList = styled.div`

`

export const CardList = styled.div`

`

export const Photo = styled.img`
  width: 100px;  
`