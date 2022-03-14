import {InitialsAvatar} from "@vkontakte/vkui";
import React from "react";

interface props {
    s: string
}

export const InitialAvatarBig = ({s}: props) => {
    return <InitialsAvatar gradientColor={1} size={216}>{s.substring(0, 1)}</InitialsAvatar>
}