import React from "react";

import { Container, Role, User, Avatar } from "./styles.js";

function UserRow({ nickname, isBot }) {
  return (
    <User>
      <Avatar className={isBot ? "bot" : ""} />

      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </User>
  );
}

function UserList() {
  return (
    <Container>
      <Role>Disponivel - 1</Role>
      <UserRow nickname="Vinicius Barrios" />

      <Role>Offline - 18</Role>
      <UserRow nickname="Diego Fernandes" isBot />
    </Container>
  );
}

export default UserList;
