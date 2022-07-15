import React from "react";
import load from "../assets/loading.png";
import styled from "styled-components";

const Load = styled.img`
  width: 160px;
  margin: 0 auto;
  padding: 20px;
  animation: rotateLoad linear 3s infinite;
  @keyframes rotateLoad {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export default function loading() {
  return <Load src={load} />;
}
