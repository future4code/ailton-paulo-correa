import styled from "styled-components";

export const ContainerMatches = styled.main`
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
  overflow: auto;
  scrollbar-color: #ffa2c9 #f5bfd6;
`;

export const CardList = styled.div`
  display: flex;
  align-items: center;
  margin: 16px;
  gap: 12px;
  border-radius: 8px;
  color: #ec5569;
  font-weight: 900;
  font-size: 20px;
  :hover{
    background-color: #cfcfcf;
  }
`;

export const Photo = styled.div`
  background-image: url(${(props)=> props.src});
  background-size: cover;
  box-shadow: 0 0 1px 2px #ffa2c9;
  border-radius: 8px;
  width: 100px;
  height: 80px;
`;

export const LoadingImgMatches = styled.img`
  width: 80px;
  animation: rotateLoad 2s infinite linear;
  @keyframes rotateLoad {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const LoadMatches = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;