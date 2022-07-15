import React from "react";
import { ContainerCard, Bio, LoadingImg, Load } from "../pages/Home/HomeStyled";
import loading from "../assets/loading.png";
import confuso from "../assets/confuso.webp";

export const Card = (props) => {
  return (
    <>
      {props.loading && (
        <Load>
          <LoadingImg src={loading} />
        </Load>
      )}
      {props.loading ||
        (props.pessoa ? (
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
        ) : (
          <ContainerCard name={"confuso"} photo={confuso}>
            <Bio>
              <h2>{`Acabou os usuários`}</h2>
              <h3>{"Não existe mais pessoas para interagir!"}</h3>
            </Bio>
          </ContainerCard>
        ))}
    </>
  );
};
