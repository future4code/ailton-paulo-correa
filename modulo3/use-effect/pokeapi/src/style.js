import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  padding: 22px;
  align-items: center;
  gap: 8px;
  background-image: url("https://i.pinimg.com/originals/df/4e/8b/df4e8ba28f912bf9cdf9fa0dfc196411.png");
  background-size: cover;
`;

export const Input = styled.input`
  width: 320px;
  height: 32px;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
`;

export const SearchBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    cursor: pointer;
    font-size: 12px;
    margin-top: 4px;
    :hover {
      text-decoration: underline;
    }
  }
`;

export const Select = styled.select`
  border-radius: 20px;
  border: solid #dc0a2d 1px;
  text-align: center;
  width: 320px;
  height: 32px;
  font-size: 18px;
  text-transform: capitalize;
  cursor: pointer;
  option {
    text-transform: capitalize;
  }
`;
