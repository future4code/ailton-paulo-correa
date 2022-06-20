import React from "react";
import styled from "styled-components";

const Botao = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid black;
  border-radius: 50px;
  box-shadow: 2px 2px 4px 1px gray;
  width: 200px;
  justify-content: center;
  padding: 15px 0px;
  margin: 10px auto;
  user-select: none;
  &:hover {
    background-color: #b3b3b3;
    cursor: pointer;
  }
`;

const ImgBotao = styled.img`
  width: 30px;
  margin-right: 10px;
`;

const Link = styled.a`
  text-decoration: none;
  color: unset;
`;

function ImagemButton(props) {
  return (
    <Botao>
      <ImgBotao src={props.imagem} />
      <Link target="blank" href={props.link}>
        <p>{props.texto}</p>
      </Link>
    </Botao>
  );
}

export default ImagemButton;
