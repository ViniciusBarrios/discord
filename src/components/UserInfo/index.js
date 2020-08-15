import React from "react";

import {
  Container,
  Profile,
  Avatar,
  UserData,
  Icons,
  MicIcon,
  HeadphoneIcon,
  SettingsIcon,
} from "./styles.js";

function UserInfo() {
  return (
    <Container>
      <Profile>
        <Avatar />

        <UserData>
          <strong>Vinicius Barrios</strong>
          <span>#6257</span>
        </UserData>
      </Profile>

      <Icons>
        <MicIcon />
        <HeadphoneIcon />
        <SettingsIcon />
      </Icons>
    </Container>
  );
}

export default UserInfo;
