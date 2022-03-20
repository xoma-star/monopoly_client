import React from 'react';
import {WelcomeRow} from "./WelcomeRow";
import {FastActionsRow} from "./FastActionsRow";
import {NewsBlock} from "../../Common/Blocks/NewsBlock";
import {CreateCompanyBottomButton} from "../../Common/Blocks/CreateCompanyBottomButton";
import {useTypedSelector} from "../../../Hooks/useTypedSelector";

export const MainPanel = () => {
    const VKUI = useTypedSelector(s => s.vkui)
    return <React.Fragment>
        <WelcomeRow/>
        {VKUI.history.map(v => `${v.view} ${v.panel}\n`)}
        {VKUI.modal.map(v => `${v}\n`)}
        <FastActionsRow/>
        <NewsBlock style={{marginTop: 40}} count={1} showNext/>
        <CreateCompanyBottomButton/>
    </React.Fragment>
}