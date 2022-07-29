import styled from "styled-components";

export const DivLogo = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 84px;
  margin: 0 auto;
  margin-bottom: 12px;
  margin-top: 60px;
  width: 84px;
`;

export const Logo1 = styled.div`
  background-color: #fe7e02;
  border-radius: 100px 0 0 0;
  height: 42px;
  width: 42px;
  animation: randomizer infinite 4s linear;
  @keyframes randomizer {
    0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(360deg);
    }
    50% {
      transform: rotate(0deg);
    }
    65% {
      transform: rotate(180deg);
    }
    75% {
      transform: rotate(360deg);
    }
    90% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;

export const Logo2 = styled(Logo1)`
  background-color: #45525b;
`;

export const Logo3 = styled(Logo1)`
  background-color: #f9b24e;
  border-radius: 0 0 100px 0;
`;

export const Logo4 = styled(Logo1)`
  background-color: #a8bbc6;
  border-radius: 0 0 100px 0;
`;
