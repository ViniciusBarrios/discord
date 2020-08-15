import React from "react";

import { Button } from "./styles";

import Logo from "../../assets/img/Logo.svg";

function ServerButton({ isHome, hasNotifications, mentions }) {
  return (
    <Button
      isHome={isHome}
      hasNotifications={hasNotifications}
      mentions={mentions}
    >
      {isHome && <img src={Logo} alt="Logo" />}
    </Button>
  );
}

export default ServerButton;
