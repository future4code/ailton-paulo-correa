import React, { Component } from "react";
import styled from "styled-components";

const ContainerPgE3 = styled.div`
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

class PageEtapa3 extends Component {
  render() {
    return (
      <ContainerPgE3>
        <h2>ETAPA 2 - INFORMAÇÕES GERAIS DE ENSINO</h2>
        <Label for="graduacao">
          5. Por que você não terminou um curso de graduação?
        </Label>
        <Input
          id="graduacao"
          value={this.props.valorGraduacao}
          onChange={this.props.onChangeGraduacao}
        />
        <AvisoErro>{this.props.aviso7}</AvisoErro>
        <Label>6. Você fez algum curso complementar?</Label>
        <Select onChange={this.props.onChangeCursoComplementar}>
          <option value={" "} />
          <option value={"Curso técnico"}>Curso técnico</option>
          <option value={"Cursos de inglês"}>Cursos de inglês</option>
          <option value={"Não fiz nem curso complementar"}>
            Não fiz nem curso complementar
          </option>
        </Select>
        <AvisoErro>{this.props.aviso8}</AvisoErro>
        <Button onClick={this.props.onClickNext}>Próxima etapa</Button>
      </ContainerPgE3>
    );
  }
}
export default PageEtapa3;
