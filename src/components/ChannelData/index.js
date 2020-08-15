import React from "react";

import {
  Container,
  Messages,
  InputWrapper,
  Input,
  InputIcon,
} from "./styles.js";

function ChannelData() {
  return (
    <Container>
      <Messages />

      <InputWrapper>
        <Input />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
}

export default ChannelData;
