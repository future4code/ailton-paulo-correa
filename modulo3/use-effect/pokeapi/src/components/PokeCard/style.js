import styled from "styled-components";

export const ContainerCard = styled.div`
  border: 2px solid;
  width: 352px;
  border-radius: 24px;
  padding: 20px 0;
  gap: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #dc0a2d;
`;

//#7c081a

export const BoxInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 280px;
  text-align: center;
  p,
  h1 {
    padding: 2px 0;
    text-align: center;
    word-wrap: break-word;
    word-break: break-all;
    border-radius: 16px;
    background-color: #5db9ff;
    text-transform: capitalize;
  }
`;

export const Tipo = styled.h2`
  padding: 2px 0;
  border-radius: 16px;
  font-size: 18px;
  text-transform: capitalize;
  background-color: ${(props) => props.corTipo};
`;
export const BoxSprite = styled.div`
  background-color: #232323;
  width: 300px;
  min-height: 200px;
  border: #dedede solid 20px;
  border-radius: 24px;
  display: flex;
  justify-content: center;
`;

export const BoxForms = styled.div`
  display: flex;
  gap: 16px;
`;

export const NormalForm = styled.p`
  background-color: ${(props) => props.cor && "#fff53d"};
  padding: 2px 8px;
  border-radius: 12px;
`;

export const ShinyForm = styled.p`
  background-color: ${(props) => props.cor && "#fff53d"};
  padding: 2px 8px;
  border-radius: 12px;
`;

export const SpritePokemon = styled.img`
  width: 200px;
`;

export const Stats = styled.div`
display: flex;
flex-direction: column;
gap: 4px;
`
export const InfoStats = styled.div`
display: flex;
justify-content: space-between;
text-transform: capitalize;
background-color: ${(props)=> props.corStat};
border-radius: 20px;
padding: 0px 8px;
`
