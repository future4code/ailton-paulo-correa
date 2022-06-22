import React from "react";
import { Box, Input, AvisoCerto, AvisoErro } from "../styled";

const RegisterUsers = (props) => {
  return (
    <Box>
      <h3>Cadastro de Usuários</h3>
      <label htmlFor="name">Nome</label>
      <Input
        id="name"
        value={props.valueInputName}
        onChange={props.onChangeName}
      />
      <label htmlFor="email">E-Mail</label>
      <Input
        id="email"
        value={props.valueInputEmail}
        onChange={props.onChangeEmail}
      />
      <button onClick={props.createUser}>Cadastrar</button>
      {props.avisoErro !== "" && <AvisoErro>{props.avisoErro}</AvisoErro>}
      {props.avisoCerto !== "" && <AvisoCerto>{props.avisoCerto}</AvisoCerto>}
    </Box>
  );
};

export default RegisterUsers;