import React, { Component } from "react";
import styled from "styled-components";

const ContainerMain = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 12px;
  gap: 12px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
  background-color: #026773;
  border-radius: 8px;
`;

const Box = styled.div`
  width: 140px;
  word-wrap: break-word;
  word-break: break-all;
  height: 140px;
  background-color: #f2e3d5;
  box-shadow: 2px 2px 0 2px #024959, 2px 2px 8px rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  color: #026773;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s;
  text-align: center;
  font-weight: 700;
  padding: 8px;
  :active {
    transition: 0.2s;
    background-color: #026773;
    color: #f2e3d5;
    box-shadow: 2px 2px 0 2px #f2e3d5, 2px 2px 8px rgba(0, 0, 0, 0.5);
  }
`;

export default class CardsPlaylist extends Component {
  render() {
    return (
      <ContainerMain>
        <Box key={0} onClick={this.props.onClickPageCreatePL}>
          + Criar Playlist
        </Box>
        {this.props.playlists.list?.map((item, index, array) => {
          return (
            <Box
              onClick={() => this.props.onClickPageDetailsPL(item.id)}
              key={item.id}
            >
              {item.name}
            </Box>
          );
        })}
      </ContainerMain>
    );
  }
}
