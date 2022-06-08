import React from "react";
import styled from "styled-components";

import { IconeCompartilhar } from "../Compartilhar/Compartilhar";
import { IconeMarcar } from "../Marcar/Marcar";
import { IconeComContador } from "../IconeComContador/IconeComContador";

import iconeCoracaoBranco from "../../img/favorite-white.svg";
import iconeCoracaoPreto from "../../img/favorite.svg";
import iconeComentario from "../../img/comment_icon.svg";
import compartilhar from "../../img/compartilhar.png";
import marcar from "../../img/marcar.png";
import marcado from "../../img/marcado.png";
import { SecaoComentario } from "../SecaoComentario/SecaoComentario";
import { SecaoCompartilhar } from "../SecaoCompartilhar/SecaoCompartilhar";

const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`;

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`;

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`;

const PostMarcar = styled.div``;

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
  cursor: pointer;
`;

const PostPhoto = styled.img`
  width: 100%;
`;

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    marcar: false,
    compartilhar: false,
    rede: "",
  };

  onClickCompartilhar = () => {
    this.setState({
      compartilhar: !this.state.compartilhar,
    });
  };
  onClickMarcar = () => {
    this.setState({
      marcar: !this.state.marcar,
    });
    if (this.state.marcar) {
      console.log("Não salvo!");
    } else {
      console.log("Salvo!");
    }
  };

  onClickCurtida = () => {
    this.setState({
      curtido: !this.state.curtido,
    });

    if (this.state.curtido) {
      console.log("Descurtiu!");
      this.setState({
        numeroCurtidas: this.state.numeroCurtidas - 1,
      });
    } else {
      console.log("Curtiu!");
      this.setState({
        numeroCurtidas: this.state.numeroCurtidas + 1,
      });
    }
  };

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando,
    });
  };

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1,
    });
  };

  compartilhouInsta = () => {
    console.log(`Post compartilhado no Instagram`);
  };
  compartilhouFB = () => {
    console.log(`Post compartilhado no Facebook`);
  };
  compartilhouTT = () => {
    console.log(`Post compartilhado no Twitter`);
  };

  render() {
    let iconeCurtida;
    let iconeMarcar;

    if (this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto;
    } else {
      iconeCurtida = iconeCoracaoBranco;
    }
    if (this.state.marcar) {
      iconeMarcar = marcado;
    } else {
      iconeMarcar = marcar;
    }

    let componenteComentario;
    let componenteCompartilhar;

    if (this.state.compartilhar) {
      componenteCompartilhar = (
        <SecaoCompartilhar
          twitter={this.compartilhouTT}
          facebook={this.compartilhouFB}
          instagram={this.compartilhouInsta}
        />
      );
    }
    if (this.state.comentando) {
      componenteComentario = (
        <SecaoComentario aoEnviar={this.aoEnviarComentario} />
      );
    }

    return (
      <PostContainer>
        <PostHeader>
          <UserPhoto src={this.props.fotoUsuario} alt={"Imagem do usuario"} />
          <p>{this.props.nomeUsuario}</p>
        </PostHeader>

        <PostPhoto src={this.props.fotoPost} alt={"Imagem do post"} />

        <PostFooter>
          <IconeComContador
            icone={iconeCurtida}
            onClickIcone={this.onClickCurtida}
            valorContador={this.state.numeroCurtidas}
          />

          <IconeCompartilhar
            icone={compartilhar}
            onClickIcone={this.onClickCompartilhar}
          />

          <IconeMarcar icone={iconeMarcar} onClickIcone={this.onClickMarcar} />

          <IconeComContador
            icone={iconeComentario}
            onClickIcone={this.onClickComentario}
            valorContador={this.state.numeroComentarios}
          />
        </PostFooter>
        {componenteComentario}
        {componenteCompartilhar}
      </PostContainer>
    );
  }
}

export default Post;
