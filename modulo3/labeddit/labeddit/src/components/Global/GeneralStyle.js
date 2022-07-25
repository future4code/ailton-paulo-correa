import styled from "styled-components";

export const Label = styled.label`
  color: #323941;
  font-family: "Noto Sans", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  margin-top: ${({ focusInput }) => (focusInput ? "8px" : "20px")};
  margin-left: 16px;
  position: absolute;
  transition: 0.6s;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 107px;
`;

export const DivInput = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border: 1px solid #d5d8de;
  border-radius: 4px;
`;

export const Input = styled.input`
  border: none;
  font-family: "Noto Sans", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  height: 60px;
  padding: 29px 17px 9px 17px;
`;

export const Button1 = styled.button`
  background-image: linear-gradient(90deg, #ff6489, #f9b24e);
  border: none;
  border-radius: 27px;
  color: #ffffff;
  font-family: "Noto Sans", sans-serif;
  font-weight: 700;
  font-size: 18px;
  height: 51px;
  line-height: 24.5px;
  margin-top: 48px;
`

export const LineDivisor = styled.div`
  background-image: linear-gradient(90deg, #ff6489, #f9b24e);
  height: 1.7px;
  margin: 18px 0;
`;