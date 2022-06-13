import React, { Component } from "react";
import styled from "styled-components";

const ContainerPgE2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px;
  border-radius: 28px;
  box-shadow: 0 0 16px 4px gray;
`;

const Input = styled.input`
  width: 400px;
  height: 20px;
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

class PageEtapa2 extends Component {
  render() {
    return (
      <ContainerPgE2>
        <h2>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h2>
        <Label>5. Qual curso?</Label>
        <Input
          value={this.props.valorCurso}
          onChange={this.props.onChangeCurso}
        />
        <AvisoErro>{this.props.aviso5}</AvisoErro>
        <Label>6. Qual a unidade de ensino?</Label>
        <Input
          value={this.props.valorUnidade}
          onChange={this.props.onChangeUnidade}
        />
        <AvisoErro>{this.props.aviso6}</AvisoErro>
        <Button onClick={this.props.onClickNext}>Próxima etapa</Button>
      </ContainerPgE2>
    );
  }
}
export default PageEtapa2;
