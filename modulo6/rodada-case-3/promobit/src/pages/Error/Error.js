import React from "react";
import Header from "../../components/Header/Header";
import { Container, Img, Text } from "./styled";
import gif from "../../assets/gif-perdido.gif";

export default function Error() {
  return (
    <>
      <Header hasBack={true} />
      <Container>
        <Text>Algo deu errado e não foi póssivel encontrar essa página!</Text>
        <Img image={gif} />
      </Container>
    </>
  );
}
