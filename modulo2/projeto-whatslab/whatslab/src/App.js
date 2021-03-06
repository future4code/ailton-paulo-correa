import React from "react";
import styled from "styled-components";
import BoxFooter from "./components/BoxFooter/BoxFooter";
import iconLogo from "./img/logo.png";
import CardMessage from "./components/CardMessage/CardMessage";
import CardMessageOnlyMe from "./components/CardMessage/CardMessageOnlyMe";

const MainContainer = styled.div`
  width: 600px;
  height: 100vh;
  padding: 0;
  margin: 0 auto;
  display: grid;
  grid-template-rows: 60px 1fr 80px;
  @media screen and (max-width: 480px) {
    width: 100vw;
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fe7e02;
  border-bottom: 2px solid gray;
  width: 600px;
  height: 60px;
  @media screen and (max-width: 480px) {
    width: 100vw;
  }
`;

const Logo = styled.img`
  user-select: none;
  width: 60px;
`;

const Logo2 = styled.p`
  user-select: none;
  font-size: 26px;
  margin: 0;
  font-weight: 600;
`;

const Footer = styled.footer`
  background-color: #fe7e02;
  border-top: 2px solid gray;
  width: 600px;
  height: 80px;
  @media screen and (max-width: 480px) {
    width: 100vw;
  }
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fae2cd;
  gap: 8px;
  width: 600px;
  height: 100%;
  padding: 8px;
  overflow: auto;
  scroll-behavior: smooth;
  scrollbar-color: #fe7e02 #fae2cd;
  @media screen and (max-width: 480px) {
    width: 100vw;
  }
`;

const Fim = styled.div`
  height: 4px;
  width: 100%;
`;

class App extends React.Component {
  state = {
    seguir: false,
    valorInputUser: "",
    valorInputMessage: "",
    messageUser: [
      {
        user: "Eu",
        message: "Olá",
      },
      {
        user: "Zé",
        message: "Opa",
      },
    ],
  };

  onClickDelete = (key) => {
    if (window.confirm("Deseja deletar a mensagem?")) {
      const arraySegura = this.state.messageUser.filter((mensagem, index) => {
        return key !== index;
      });
      this.setState({
        messageUser: [...arraySegura],
      });
    }
  };

  onChangeUser = (event) => {
    this.setState({
      valorInputUser: event.target.value,
    });
  };

  onChangeMessage = (event) => {
    this.setState({
      valorInputMessage: event.target.value,
    });
  };

  onClickSend = () => {
    let arraySegura = [this.state.valorInputUser, this.state.valorInputMessage];
    if (arraySegura[0] !== "") {
      if (arraySegura[1] != "") {
        let arrayMessage = [...this.state.messageUser];
        arrayMessage.push({
          user: arraySegura[0],
          message: arraySegura[1],
        });
        this.setState({
          messageUser: [...arrayMessage],
          valorInputMessage: "",
          seguir: true,
        });
      }
    }
    const element = document.getElementById("FocarFim");
    element.scrollIntoView(false);
  };

  onKeyPressSend = (event) => {
    if (event.key === "Enter") {
      let arraySegura = [
        this.state.valorInputUser,
        this.state.valorInputMessage,
      ];
      if (arraySegura[0] !== "") {
        if (arraySegura[1] != "") {
          let arrayMessage = [...this.state.messageUser];
          arrayMessage.push({
            user: arraySegura[0],
            message: arraySegura[1],
          });
          this.setState({
            messageUser: [...arrayMessage],
            valorInputMessage: "",
            seguir: true,
          });
        }
      }
    }
    const element = document.getElementById("FocarFim");
    element.scrollIntoView(false);
  };

  render() {
    const arrayCardMensagens = this.state.messageUser.map((item, index) => {
      if (item.user.toLowerCase() === "eu") {
        return (
          <CardMessageOnlyMe
            key={index}
            itens={item}
            index={index}
            onClickDelete={() => this.onClickDelete(index)}
          />
        );
      } else {
        return (
          <CardMessage
            key={index}
            itens={item}
            index={index}
            onClickDelete={() => this.onClickDelete(index)}
          />
        );
      }
    });    
    return (
      <MainContainer>
        <Header>
          <Logo src={iconLogo} alt="Logo WhatsLab" />
          <Logo2>WhatsLab</Logo2>
        </Header>
        <Main>
          {arrayCardMensagens}
          <Fim id="FocarFim" />
        </Main>
        <Footer>
          <BoxFooter
            onKeyPressSend={this.onKeyPressSend}
            onClickSend={this.onClickSend}
            onChangeMessage={this.onChangeMessage}
            onChangeUser={this.onChangeUser}
            valorInputMessage={this.state.valorInputMessage}
            valorInputUser={this.state.valorInputUser}
          />
        </Footer>
      </MainContainer>
    );
  }
}

export default App;
