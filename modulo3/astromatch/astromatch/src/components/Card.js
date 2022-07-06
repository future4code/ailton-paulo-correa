import React from "react";
import { ContainerCard, Bio, LoadingImg, Load } from "../pages/Home/HomeStyled";
import loading from "../assets/loading.png";

export const Card = (props) => {
  return (
    <ContainerCard photo={props.pessoa.photo} role={props.pessoa.photo_alt}>

      <Load>{props.loading && <LoadingImg src={loading} />}</Load>
      
      {props.loading || (
        <Bio>
          <h2>{`${props.pessoa.name}, ${props.pessoa.age} anos`}</h2>
          <h3>{props.pessoa.bio}</h3>
        </Bio>
      )}
    </ContainerCard>
  );
};
