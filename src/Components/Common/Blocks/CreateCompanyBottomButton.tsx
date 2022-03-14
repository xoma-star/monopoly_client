import {Button, FixedLayout, Group} from "@vkontakte/vkui";
import {VKUI_PANELS} from "../../../Constants/VKUI";
import React from "react";
import {useActions} from "../../../Hooks/useActions";

export const CreateCompanyBottomButton = () => {
    const {VKUIhistoryPush} = useActions()
    return <FixedLayout vertical={'bottom'}>
        <Group style={{padding: 10}}>
            <Button onClick={() => VKUIhistoryPush({panel: VKUI_PANELS.COMPANY_CREATE, view: 'main'})} size={'l'}
                    stretched>Создать компанию</Button>
        </Group>
    </FixedLayout>
}