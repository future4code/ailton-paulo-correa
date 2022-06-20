import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid black;
  padding: 20px 10px;
  height: 60px;
  box-shadow: 2px 2px 4px 2px gray;
`;

const ImgCard = styled.img`
  width: 32px;
  margin-right: 10px;
  border-radius: 50%;
`;

const SectionInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: flex-start;
  @media screen and (max-width: 480px) {
    p>b{
      visibility: hidden;
      font-size: 0px;
    }
  }
`;

function CardPequeno(props) {
  return (
    <Card>
      <ImgCard src={props.imagem} />
      <SectionInfos>
        <p>
          <b>{props.tipo}</b> {props.texto}
        </p>
      </SectionInfos>
    </Card>
  );
}

export default CardPequeno;
