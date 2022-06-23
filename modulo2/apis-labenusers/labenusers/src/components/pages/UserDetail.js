import React from "react";
import { Box, Input, ButtonBox, AvisoCerto, AvisoErro } from "../styled";

const UserDetail = (props) => {
  return (
    <Box>
      <h3>Editar usuário</h3>
      <label htmlFor="name">Nome</label>
      <Input
        id="name"
        onChange={props.onChangeNameEdit}
        value={props.valueInputNameEdit}
      />
      <label htmlFor="email">E-Mail</label>
      <Input
        id="email"
        onChange={props.onChangeEmailEdit}
        value={props.valueInputEmailEdit}
      />
      <ButtonBox>
        <h3 onClick={() => props.editUser(props.valueIdEdit)}>Salvar</h3>
        <h3 onClick={() => props.deleteUserEdit(props.valueIdEdit)}>Deletar</h3>
        <h3 onClick={props.onClickPageList}>Cancelar</h3>
      </ButtonBox>
      <AvisoCerto>{props.avisoCerto}</AvisoCerto>
      <AvisoErro>{props.avisoErro}</AvisoErro>
    </Box>
  );
};

export default UserDetail;
