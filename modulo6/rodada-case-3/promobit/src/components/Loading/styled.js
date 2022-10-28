import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-grow: 1;
`;

export const SVG = styled.svg`
  height: 100px;
  width: 100px;
  animation: infinite linear 2s rotation;
  @keyframes rotation {
    0% {
      rotate: 0deg;
    }
    100% {
      rotate: 360deg;
    }
  }
`;

export const Circle = styled.circle`
  fill: none;
  stroke: #5c16c5;
  stroke-width: 10;
  stroke-linecap: round;
  stroke-dasharray: 500;
  stroke-dashoffset: 320;
`;

export const TextLoading = styled.span`
  font-size: 2rem;
  font-weight: 800;
`;
