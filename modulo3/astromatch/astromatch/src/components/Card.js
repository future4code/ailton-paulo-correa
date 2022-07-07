import React from "react";
import {
  ContainerCard,
  Bio,
  LoadingImg,
  Load,
  EndCard,
} from "../pages/Home/HomeStyled";
import loading from "../assets/loading.png";

export const Card = (props) => {
  return (
    <>
      <Load>{props.loading && <LoadingImg src={loading} />}</Load>
      {props.loading ||
        (props.pessoa && (
          <ContainerCard
            name={props.pessoa.name}
            photo={props.pessoa.photo}
            role={props.pessoa.photo_alt}
          >
            <Bio>
              <h2>{`${props.pessoa.name}, ${props.pessoa.age} anos`}</h2>
              <h3>{props.pessoa.bio}</h3>
            </Bio>
          </ContainerCard>
        ))}
      {/* {props.pessoa || <EndCard>Ninguem mais te quer</EndCard>} */}
    </>
  );
};
