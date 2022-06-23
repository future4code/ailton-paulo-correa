import React, { Component } from "react";
import styled from "styled-components";

const RegisterContainer = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Fascinate&family=Kdam+Thmor+Pro&family=League+Gothic&display=swap");
  font-family: "Kdam Thmor Pro", sans-serif;
  background-color: #f2e3d5;
  width: 320px;
  height: 360px;
  border: 1px solid #026773;
  box-shadow: 2px 2px 0 2px #026773, 4px 4px 0 4px #024959;
  border-radius: 12px;
  display: grid;
  grid-template-rows: repeat(7, 1fr);
  justify-content: center;
  align-items: center;
  user-select: none;
  margin: 0 auto;
  h2 {
    grid-area: 2/1/3/2;
    margin: 0 auto;
  }
`;

const ButtonLogin = styled.p`
  grid-area: 6/1/7/2;
  user-select: none;
  width: 100px;
  color: #f2e3d5;
  margin: 0 auto;
  background-color: #026773;
  box-shadow: 2px 2px 0 1px #024959;
  border-radius: 12px;
  padding: 8px 20px;
  :hover {
    opacity: 80%;
  }
  :active {
    background-color: #024959;
    box-shadow: 2px 2px 0 2px #026773;
  }
`;

const Input = styled.input`
  width: 260px;
  background-color: transparent;
  border-top-style: hidden;
  border-left-style: hidden;
  border-right-style: hidden;
  border-bottom-style: ridge;
  padding: 0 4px;
  :active,
  :focus {
    outline-style: none;
  }
`;

const BoxInput = styled.div`
  grid-area: 3/1/4/2;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const BoxRegistrar = styled.div`
  grid-area: 4/1/5/2;
  text-align: right;
`;

const ButtonRegister = styled.p`
  color: #026773;
  :hover {
    text-decoration: underline;
  }
`;

export default class Login extends Component {
  render() {
    return (
      <RegisterContainer>
        <h2>Login</h2>
        <BoxInput>
          <label htmlFor="user">Usuário</label>
          <Input
            value={this.props.valueInputUser}
            onChange={this.props.onChangeInputUser}
            id="user"
            maxLength={20}
          />
          <label htmlFor="password">Senha</label>
          <Input
            value={this.props.valueInputPassword}
            onChange={this.props.onChangeInputPassword}
            id="password"
            type={"password"}
          />
        </BoxInput>
        <BoxRegistrar>
          <ButtonRegister onClick={this.props.onClickPageRigister}>
            Quero registrar!
          </ButtonRegister>
        </BoxRegistrar>
        <ButtonLogin onClick={this.props.onClickLogin}>Conectar</ButtonLogin>
      </RegisterContainer>
    );
  }
}
