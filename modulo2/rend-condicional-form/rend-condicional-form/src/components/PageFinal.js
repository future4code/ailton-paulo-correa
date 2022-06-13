import React, { Component } from "react";
import styled from "styled-components";

const ContainerFinal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px;
  border-radius: 28px;
  box-shadow: 0 0 16px 4px gray;
  h3 {
    padding: 0;
    margin: 0;
    margin-top: 12px;
    font-size: 16px;
  }
`;

class PageFinal extends Component {
  render() {
    return (
      <ContainerFinal>
        <h2>O FORMULÁRIO ACABOU</h2>
        <p>Muito obrigado por particiupar! Entraremos em contato!</p>
      </ContainerFinal>
    );
  }
}
export default PageFinal;
