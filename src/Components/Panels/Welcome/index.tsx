import React from 'react'
import {Group, PanelHeader, PanelHeaderClose} from "@vkontakte/vkui";
import {useActions} from '../../../Hooks/useActions';
import {WelcomeBanner1, WelcomeBanner2, WelcomeBanner3, WelcomeBanner4} from "./WelcomeBanners";
import {CreateCompanyBottomButton} from "../../Common/Blocks/CreateCompanyBottomButton";

const WelcomePanel: React.FC = () => {
    const {VKUIHistoryBack} = useActions()
    return <React.Fragment>
        <PanelHeader left={<PanelHeaderClose onClick={VKUIHistoryBack}/>}>Добро пожаловать!</PanelHeader>
        <Group>
            <WelcomeBanner1/>
            <WelcomeBanner2/>
            <WelcomeBanner3/>
            <WelcomeBanner4/>
        </Group>
        <CreateCompanyBottomButton/>
    </React.Fragment>
}

export default WelcomePanel