import React from "react";
import styled from "styled-components";

const IconContainer = styled.div`
  display: flex;
`;
const IconImage = styled.img`
  margin-right: 5px;
  width: 20px;
  cursor: pointer;
`;

export function IconeMarcar(props) {
  return (
    <IconContainer>
      <IconImage alt={"Icone"} src={props.icone} onClick={props.onClickIcone} />
    </IconContainer>
  );
}
