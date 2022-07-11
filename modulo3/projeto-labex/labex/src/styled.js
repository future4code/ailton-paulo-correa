import styled from "styled-components";
import bgHome from "./assets/background.jpg";

export const Container = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${bgHome});
  background-size: cover;
  background-position: center;
`;
