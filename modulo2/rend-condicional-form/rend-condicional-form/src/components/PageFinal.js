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
  max-width: 80vw;
  @media screen and (max-width: 600px){
    min-width: 80vw;
    padding: 20px;
    Input, Select{
      width: 90%;
    }
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
