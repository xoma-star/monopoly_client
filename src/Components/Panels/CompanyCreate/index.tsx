import React, {useCallback, useState} from "react";
import {VKUI_TEST} from "../../../Constants/VKUI";
import {CompanyHeader} from "../../Common/Blocks/CompanyHeader";
import {CompanyCreateForm} from "./CompanyCreateForm";
import {InitialAvatarBig} from "../../Common/InitialAvatarBig";
import {PanelHeader, PanelHeaderClose} from "@vkontakte/vkui";
import {useActions} from "../../../Hooks/useActions";

export const CompanyCreatePanel: React.FC = () => {
    const [headerName, setHeaderName] = useState<string>(VKUI_TEST.COMPANY_NAME)
    const [logo, setLogo] = useState<string | React.ReactFragment>(<InitialAvatarBig s={''}/>)
    const nameHandler = useCallback((s: string) => setHeaderName(s), [])
    const logoHandler = useCallback((s: string) => setLogo(s), [])

    const {VKUIHistoryBack} = useActions()

    return <React.Fragment>
        <PanelHeader left={<PanelHeaderClose onClick={VKUIHistoryBack}/>}>Создать</PanelHeader>
        <CompanyHeader logo={logo} name={headerName}/>
        <CompanyCreateForm updateHeaderName={nameHandler} updateLogo={logoHandler}/>
    </React.Fragment>
}