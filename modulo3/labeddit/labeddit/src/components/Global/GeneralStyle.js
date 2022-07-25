import styled from "styled-components";

export const Label = styled.label`
  color: #323941;
  font-family: "Noto Sans", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  margin-top: ${({ focusInput }) => (focusInput ? "10px" : "20px")};
  margin-left: 16px;
  position: absolute;
  transition: 0.6s;
`;
