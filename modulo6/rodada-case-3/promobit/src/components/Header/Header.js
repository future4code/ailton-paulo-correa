import React from "react";
import * as St from "./styled";
import imgLogo from "../../assets/logo.png";
import { goToPage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";

export default function Header({ hasBack = false }) {
  const navigate = useNavigate();
  return (
    <St.Container
      hasBack={hasBack}
      onClick={() => hasBack && goToPage(navigate, "/")}
    >
      <St.Space />
      <St.Img src={imgLogo} alt="Logo TMDB" />
    </St.Container>
  );
}
