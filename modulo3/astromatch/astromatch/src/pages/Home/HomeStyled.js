import styled from "styled-components";

export const ContainerHome = styled.div`
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
  grid-area: 1/3/2/4;
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

export const Footer = styled.footer`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-grow: 1;
`;

export const Button = styled.p`
  background-image: url(${(props) => props.icon});
  background-size: cover;
  width: 80px;
  height: 80px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  border: #fffcf2;
  transition: 0.2s;
  cursor: pointer;
  :hover {
    transition: 0.2s;
    border: solid 4px #fffcf2;
  }
  :active {
    transition: 0.2s;
    transform: rotate(30deg);
  }
`;

// styled Card.js
export const ContainerCard = styled.div`
  margin: 0 auto;
  margin-top: 20px;
  border: solid 1px #252422;
  width: 92%;
  display: flex;
  flex-direction: column;
  height: 580px;
  background-image: url(${(props) => props.photo});
  background-size: cover;
  background-position: center top;
  justify-content: end;
  color: #fff;
  text-shadow: 1px 1px 2px black;
  h2 {
    padding: 8px 24px;
  }
  h3 {
    padding: 8px 24px;
    text-indent: 32px;
    text-align: justify;
  }
  @media screen and (max-height: 670px) {
    height: 400px;
  }
`;

export const LoadingImg = styled.img`
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

export const Load = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Bio = styled.div`
  padding: 40px 0 12px 0;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
`;
