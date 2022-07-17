import React from "react";
import { useNavigate } from "react-router-dom";
import { goToPage } from "../../routes/coordinator";
import { ImgError, Logo } from "../Home/styled";
import { Button, ErrorContainer, ErrorDiv, TitleError } from "./styled";
import pageNotFound from "../../assets/page-not-found.png";
export default function ErrorPage() {
  const navigate = useNavigate();
  return (
    <ErrorContainer>
      <Logo>LabeX</Logo>
      <ErrorDiv>
        <ImgError src={pageNotFound} />
        <TitleError>PÁGINA NÃO ENCONTRADA</TitleError>
        <Button onClick={() => goToPage(navigate, "")}>Home</Button>
      </ErrorDiv>
    </ErrorContainer>
  );
}
