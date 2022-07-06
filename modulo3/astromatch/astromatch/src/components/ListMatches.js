import React from "react";
import { ContainerList, CardList, Photo } from "../pages/Matches/MatchesStyled";

export const ListMatches = (props) => {
  console.log(props);
  return (
    <ContainerList>
      {props.arrayMatches?.map((item) => {
        return (
          <CardList key={item.id}>
            <Photo src={item.photo}/>
            <p>{item.name}</p>
          </CardList>
        );
      })}
    </ContainerList>
  );
};
