import React, { useState } from "react";
import {
  PostContainer,
  PostHeader,
  UserPhoto,
  PostPhoto,
  PostFooter,
  Card,
} from "./styles";
import IconeComContador from "../IconeComContador/IconeComContador";
import SecaoComentario from "../SecaoComentario/SecaoComentario";
import iconeCoracaoBranco from "../../img/favorite-white.svg";
import iconeCoracaoPreto from "../../img/favorite.svg";
import iconeComentario from "../../img/comment_icon.svg";

const Post = (props) => {
  //useState
  const [inputComentario, setInputComentario] = useState("");
  const [curtido, setCurtido] = useState(false);
  const [comentando, setComentando] = useState(false);
  const [comentarios, setComentarios] = useState([]);
  //useState
  //Funções
  const onClickCurtida = () => {
    setCurtido(!curtido);
  };
  const onClickComentario = () => {
    setComentando(!comentando);
  };
  const enviarComentario = () => {
    setComentarios([...comentarios, inputComentario]);
    setInputComentario("");
  };
  const onChangeComentario = (event) => {
    setInputComentario(event.target.value);
  };
  //Funções
  return (
    <PostContainer>
      <PostHeader>
        <UserPhoto src={props.fotoUsuario} alt={"Imagem do usuario"} />
        <p>{props.nomeUsuario}</p>
      </PostHeader>
      <PostPhoto src={props.fotoPost} alt={"Imagem do post"} />
      <PostFooter>
        <IconeComContador
          icone={curtido ? iconeCoracaoPreto : iconeCoracaoBranco}
          onClickIcone={onClickCurtida}
          valorContador={curtido ? 1 : 0}
        />
        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          valorContador={comentarios.length}
        />
      </PostFooter>
      {comentando && (
        <>
          <SecaoComentario
            onChangeComentario={onChangeComentario}
            inputComentario={inputComentario}
            enviarComentario={enviarComentario}
          />
          {comentarios.map((item, index) => {
            return (
              <Card key={index}>
                <h4>Comentário Anônimo:</h4>
                <p>{item}</p>
                <hr />
              </Card>
            );
          })}
        </>
      )}
    </PostContainer>
  );
};
export default Post;
