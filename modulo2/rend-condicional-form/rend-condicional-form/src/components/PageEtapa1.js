import React, { Component } from "react";
import styled from "styled-components";

const ContainerPgE1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px;
  border-radius: 28px;
  box-shadow: 0 0 16px 4px gray;
  max-width: 80vw;
  @media screen and (max-width: 600px){
    min-width: 80vw;
    padding: 20px;
    Input, Select, Label, h2{
      width: 90%;
    }
  }
`;

const Input = styled.input`
  width: 400px;
  height: 20px;
`;

const Select = styled.select`
  width: 400px;
  height: 26px;
`;

const AvisoErro = styled.p`
  padding: 0;
  margin: 0;
  color: red;
  font-size: 12px;
`;

const Label = styled.label`
  padding: 20px;
`;

const Button = styled.button`
  width: 120px;
  height: 20px;
  margin-top: 20px;
  padding: 0;
`;

class PageEtapa1 extends Component {
  render() {
    return (
      <ContainerPgE1>
        <h2>ETAPA 1 - DADOS GERAIS</h2>
        <Label for="nome">1. Qual é o seu nome?</Label>
        <Input
          id="nome"
          value={this.props.valorNome}
          onChange={this.props.onChangeNome}
        />
        <AvisoErro>{this.props.aviso1}</AvisoErro>
        <Label for="idade">2. Qual sua idade?</Label>
        <Input
          id="idade"
          value={this.props.valorIdade}
          onChange={this.props.onChangeIdade}
        />
        <AvisoErro>{this.props.aviso2}</AvisoErro>
        <Label for="email">3. Qual seu email?</Label>
        <Input
          id="email"
          value={this.props.valorEmail}
          onChange={this.props.onChangeEmail}
        />
        <AvisoErro>{this.props.aviso3}</AvisoErro>
        <Label>4. Qual a sua escolaridade?</Label>
        <Select onChange={this.props.onChangeSelect}>
          <option value={" "} />
          <option value={"Ensino médio incompleto"}>
            Ensino médio incompleto
          </option>
          <option value={"Ensino médio completo"}>Ensino médio completo</option>
          <option value={"Ensino superior incompleto"}>
            Ensino superior incompleto
          </option>
          <option value={"Ensino superior completo"}>
            Ensino superior completo
          </option>
        </Select>
        <AvisoErro>{this.props.aviso4}</AvisoErro>
        <Button onClick={this.props.onClickNext}>Próxima etapa</Button>
      </ContainerPgE1>
    );
  }
}
export default PageEtapa1;
