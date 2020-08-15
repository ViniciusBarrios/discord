import React, { useRef, useEffect } from "react";

import {
  Container,
  Messages,
  InputWrapper,
  Input,
  InputIcon,
} from "./styles.js";

import ChannelMassage, { Mention } from "../ChannelMessage";

function ChannelData() {
  const messagesRef = useRef();

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, []);

  return (
    <Container>
      <Messages ref={messagesRef}>
        {Array.from(Array(15)).map((item, index) => {
          return (
            <ChannelMassage
              key={index}
              author="Vinicius Barrios"
              date="15/08/2020"
              content="Hoje é meu aniversário!"
            />
          );
        })}

        <ChannelMassage
          author="Diego Fernandes"
          date="15/08/2020"
          content={
            <>
              <Mention>@Vinicius barrios</Mention>, me carrega no LoL e CS de
              nvo por favor?
            </>
          }
          hasMention
          isBot
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Comversar em #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
}

export default ChannelData;
