import styled from "styled-components";

export const ContainerHeader = styled.header`
  background-color: #ededed;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 29px 0;
`;

export const IconBack = styled.img`
  width: 25px;
  height: 25px;
  position: absolute;
  left: 34px;
`;

export const DivLogo = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 30px;
  margin: 0 auto;
  width: 30px;
`;

export const Logo1 = styled.div`
  background-color: #fe7e02;
  border-radius: 100px 0 0 0;
  height: 15px;
  width: 15px;
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

export const ButtonHeader = styled.button`
  border: none;
  background-color: unset;
  color: #4088cb;
  font-family: "Noto Sans";
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  position: absolute;
  right: 29px;
`;
