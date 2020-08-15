import React from "react";

import { Container, Category, AddCategoryIcon } from "./styles.js";

import ChannelButton from "../ChannelButton";

function ChannelList() {
  return (
    <Container>
      <Category>
        <span>Canais de texto</span>
        <AddCategoryIcon />
      </Category>

      <ChannelButton channelName="chat-livre" />
      <ChannelButton channelName="Trabalho" />
      <ChannelButton channelName="lolzinho" />
      <ChannelButton channelName="csgo" />
      <ChannelButton channelName="valorant" />
    </Container>
  );
}

export default ChannelList;
