import React from "react";

import { Container, HashtagIcon, InviteIcon, SettingsIcon } from "./styles.js";

function ChannelButton({ channelName }) {
  return (
    <Container>
      <div>
        <HashtagIcon />

        <span>{ channelName }</span>
      </div>

      <div>
        <InviteIcon />
        <SettingsIcon />
      </div>
    </Container>
  );
}

export default ChannelButton;
