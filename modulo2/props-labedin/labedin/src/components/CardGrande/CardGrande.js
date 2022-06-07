import React from "react";
import styled from "styled-components";

const BigCard = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid black;
  padding: 20px 10px;
  margin-bottom: 10px;
  height: 200px;
  box-shadow: 2px 2px 4px 2px gray;
`;

const ImgCard = styled.img`
  width: 70px;
  margin-right: 10px;
  border-radius: 50%;
`;

const TituloNome = styled.h4`
  margin-bottom: 15px;
`;

const SectionInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: flex-start;
`;

function CardGrande(props) {
  return (
    <BigCard>
      <ImgCard src={props.imagem} />
      <SectionInfos>
        <TituloNome>{props.nome}</TituloNome>
        <p>{props.descricao}</p>
      </SectionInfos>
    </BigCard>
  );
}

export default CardGrande;
