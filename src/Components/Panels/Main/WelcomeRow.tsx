import {Group, Title} from "@vkontakte/vkui";
import {VKUI_TEST} from "../../../Constants/VKUI";
import React from "react";

export const WelcomeRow = () => {
    return <Group style={{textAlign: "center", marginTop: 16}}>
        <Title level={'1'}>Добрый день, {VKUI_TEST.FIRST_NAME}</Title>
    </Group>
}