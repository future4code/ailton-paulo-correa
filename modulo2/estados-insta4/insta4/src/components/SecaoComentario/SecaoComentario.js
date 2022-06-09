import React, { Component } from "react";
import styled from "styled-components";

const CommentContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px;
`;

const InputComentario = styled.input`
  width: 100%;
  margin-right: 5px;
`;

const BoxComment = styled.div`
  border: 1px gray;
  border-style: solid;
  padding: 8px;
`;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const TextoComentario = styled.p`
width: 96%;
text-align: justify;
word-wrap: break-word;
`

export class SecaoComentario extends Component {
  render() {
    const comentarios = this.props.comentario.map((item, index) => {
      return (
        <BoxComment key={index}>
          <h4>Usuário Anônimo comentou:</h4>
          <TextoComentario>{item}</TextoComentario>
        </BoxComment>
      );
    });
    return (
      <SectionContainer>
        <CommentContainer>
          <InputComentario
            placeholder={"Comentário"}
            value={this.props.textoInput}
            onChange={this.props.onChangeComentario}
          />
          <button onClick={this.props.aoEnviar}>Enviar</button>
        </CommentContainer>
        {comentarios}
      </SectionContainer>
    );
  }
}
