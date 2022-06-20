import React, { Component } from 'react'
import styled from 'styled-components';

const CardOnlyMe = styled.div`
  background-color: #fff;
  min-width: min-content;
  max-width: max-content;
  word-wrap: break-word;
  word-break: break-all;
  text-align: justify;
  border-radius: 12px;
  border: gray 2px solid;
  background-color: orange;
  max-width: 70%;  
  display: grid;
  h3,p{
    margin: 0;
    padding: 8px;
  }
  button{
    background-color: transparent;
    border-radius:30px ;
    border: 1px solid gray;
  }
`;
const DivCardOnlyMe = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: flex-end;
`;
export default class CardMessageOnlyMe extends Component {
  render() {
    return (
        <DivCardOnlyMe>
        <CardOnlyMe key={this.props.index} onDoubleClick={this.props.onClickDelete}>
        <h3>{this.props.itens.user}:</h3>
        <p>{this.props.itens.message}</p>
      </CardOnlyMe>
        </DivCardOnlyMe>
    )
  }
}
