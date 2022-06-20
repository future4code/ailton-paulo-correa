import React, { Component } from "react";
import styled from "styled-components";
import iconSend from "../../img/enviar.png";

const DivFooter = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const InputUser = styled.input`
  width: 100px;
  height: 40px;
  margin: 0;
  padding: 0 8px;
  border-radius: 20px;
  border: 2px solid gray;
  @media screen and (max-width: 480px) {
    width: 80px;
  }
`;
const InputText = styled.input`
  width: 360px;
  height: 40px;
  margin: 0;
  padding: 0 8px;
  border-radius: 20px;
  border: 2px solid gray;
  @media screen and (max-width: 480px) {
    width: 320px;
  }
`;

const ButtonSend = styled.button`
  user-select: none;
  width: 64px;
  height: 44px;
  padding: 0;
  margin: 0;
  border-radius: 20px;
  border: 2px solid gray;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImgSend = styled.img`
  user-select: none;
  width: 32px;
  @media screen and (max-width: 480px) {
    width: 24px;
  }
`;


class BoxFooter extends Component {  
  render() {
    return (
      <DivFooter>
        <InputUser
          placeholder="Usuário"
          onChange={this.props.onChangeUser}
          value={this.props.valorInputUser}
        />
        <InputText
          onKeyPress={this.props.onKeyPressSend}
          placeholder="Mensagem"
          onChange={this.props.onChangeMessage}
          value={this.props.valorInputMessage}
        />
        <ButtonSend onClick={this.props.onClickSend}>
          <ImgSend src={iconSend} alt="Ícone enviar" />
        </ButtonSend>
      </DivFooter>
    );
  }
}
export default BoxFooter;
