import {
    ModalPageHeader,
    PanelHeaderClose
} from "@vkontakte/vkui";
import React from 'react'
import {useActions} from "../../../Hooks/useActions";
import {NoProdLines} from "./NoProdLines";

export const CompanyManageProductionNewModal = () => {
    const {VKUIModalSet} = useActions()
    return <React.Fragment>
        <ModalPageHeader left={<PanelHeaderClose onClick={() => VKUIModalSet(null)}/>}>
            Новая линия
        </ModalPageHeader>
        <NoProdLines/>
    </React.Fragment>
}