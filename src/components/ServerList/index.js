import React from "react"

import { Container, Separator } from "./styles"

import ServerButton from "../ServerButton"

function ServerList() {
    return (
        <Container>
            <ServerButton isHome />

            <Separator />

            <ServerButton />
            <ServerButton hasNotifications />
            <ServerButton mentions={30}/>
            <ServerButton />
            <ServerButton />
            <ServerButton />
            <ServerButton />
            <ServerButton />
            <ServerButton />
            <ServerButton />
            <ServerButton />
        </Container>
    );
}

export default ServerList;