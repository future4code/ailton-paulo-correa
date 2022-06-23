import React from "react";
import { Box, DivUsers, Input } from "../styled";

const ListUsers = (props) => {
  return (
    <Box>
      <h3>Lista de Usuários Cadastrado</h3>
      {props.usuarios.length !== 0 ? (
        props.usuarios.map((item, index) => {
          return (
            <DivUsers key={item.id}>
              <li>Nome: {item.name}</li>
              <h5 onClick={() => props.onClickPageDetail(item.id)}>Editar</h5>
              <p
                onClick={() => {
                  props.deleteUser(item.id);
                }}
              >
                X
              </p>
            </DivUsers>
          );
        })
      ) : (
        <p>Nenhum usuário encontrado!</p>
      )}
    </Box>
  );
};

export default ListUsers;
