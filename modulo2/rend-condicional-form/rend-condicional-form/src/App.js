import React, { Component } from "react";
import styled from "styled-components";
import PageEtapa1 from "./components/PageEtapa1";
import PageEtapa2 from "./components/PageEtapa2";
import PageEtapa3 from "./components/PageEtapa3";
import PageFinal from "./components/PageFinal";

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

class App extends Component {
  state = {
    page: "page1",
    aviso1: "",
    aviso2: "",
    aviso3: "",
    aviso4: "",
    aviso5: "",
    aviso6: "",
    aviso7: "",
    aviso8: "",
    valorInputNome: "",
    valorInputIdade: "",
    valorInputEmail: "",
    valorInputIdade: "",
    valorInputSelect: " ",
    valorInputCurso: "",
    valorInputUnidade: "",
    valorInputGraduacao: "",
    valorInputCursoComplementar: "",
    formularioArmazenado: [],
  };

  onChangeNome = (event) => {
    this.setState({
      aviso1: "",
      valorInputNome: event.target.value,
    });
  };

  onChangeIdade = (event) => {
    this.setState({
      aviso2: "",
      valorInputIdade: event.target.value,
    });
  };

  onChangeEmail = (event) => {
    this.setState({
      aviso3: "",
      valorInputEmail: event.target.value,
    });
  };

  onChangeSelect = (event) => {
    this.setState({
      aviso4: "",
      valorInputSelect: event.target.value,
    });
  };

  onChangeCurso = (event) => {
    this.setState({
      aviso5: "",
      valorInputCurso: event.target.value,
    });
  };

  onChangeUnidade = (event) => {
    this.setState({
      aviso6: "",
      valorInputUnidade: event.target.value,
    });
  };

  onChangeGraduacao = (event) => {
    this.setState({
      aviso7: "",
      valorInputGraduacao: event.target.value,
    });
  };

  onChangeCursoComplementar = (event) => {
    this.setState({
      aviso8: "",
      valorInputCursoComplementar: event.target.value,
    });
  };

  onClickNextE1 = () => {
    this.state.valorInputNome != ""
      ? this.state.valorInputIdade != ""
        ? this.state.valorInputEmail != ""
          ? this.state.valorInputSelect != " "
            ? this.state.valorInputSelect === "Ensino médio incompleto"
              ? this.setState({ page: "page2" })
              : this.state.valorInputSelect === "Ensino médio completo"
              ? this.setState({ page: "page2" })
              : this.setState({ page: "page3" })
            : this.setState({ aviso4: "Escolha uma escolaridade!" })
          : this.setState({ aviso3: "Preencha o campo de E-mail!" })
        : this.setState({ aviso2: "Preencha o campo de Idade!" })
      : this.setState({ aviso1: "Preencha o campo de Nome!" });
  };

  onClickNextE2 = () => {
    let vaiArmazenar = false;
    this.state.valorInputCurso != ""
      ? this.state.valorInputUnidade != ""
        ? (this.setState({ page: "pageFim" }))
        : this.setState({ aviso6: "Preencha o campo de Unidade!" })
      : this.setState({ aviso5: "Preencha o campo de Curso!" });
  };

  onClickNextE3 = () => {
    this.state.valorInputGraduacao != ""
      ? this.state.valorInputCursoComplementar != ""
        ? this.setState({ page: "pageFim" })
        : this.setState({ aviso8: "Preencha o campo sobre graduação!" })
      : this.setState({ aviso7: "Preencha o campo de curso complementar!" });
  };

  render() {
    return (
      <Container>
        {this.state.page === "page1" && (
          <PageEtapa1
            aviso1={this.state.aviso1}
            aviso2={this.state.aviso2}
            aviso3={this.state.aviso3}
            aviso4={this.state.aviso4}
            valorNome={this.state.valorInputNome}
            onChangeNome={this.onChangeNome}
            valorIdade={this.state.valorInputIdade}
            onChangeIdade={this.onChangeIdade}
            valorEmail={this.state.valorInputEmail}
            onChangeEmail={this.onChangeEmail}
            onChangeSelect={this.onChangeSelect}
            onClickNext={this.onClickNextE1}
          />
        )}
        {this.state.page === "page2" && (
          <PageEtapa2
            aviso5={this.state.aviso5}
            aviso6={this.state.aviso6}
            valorCurso={this.state.valorInputCurso}
            onChangeCurso={this.onChangeCurso}
            valorUnidade={this.state.valorInputUnidade}
            onChangeUnidade={this.onChangeUnidade}
            onClickNext={this.onClickNextE2}
          />
        )}
        {this.state.page === "page3" && (
          <PageEtapa3
            aviso7={this.state.aviso7}
            aviso8={this.state.aviso8}
            valorGraduacao={this.state.valorInputGraduacao}
            onChangeGraduacao={this.onChangeGraduacao}
            onChangeCursoComplementar={this.onChangeCursoComplementar}
            onClickNext={this.onClickNextE3}
          />
        )}
        {this.state.page === "pageFim" && (
          <PageFinal valorArmazenado={this.state.formularioArmazenado} />
        )}
      </Container>
    );
  }
}

export default App;
