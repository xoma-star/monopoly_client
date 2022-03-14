import React from 'react';
import {WelcomeRow} from "./WelcomeRow";
import {FastActionsRow} from "./FastActionsRow";
import {NewsBlock} from "../../Common/Blocks/NewsBlock";
import {CreateCompanyBottomButton} from "../../Common/Blocks/CreateCompanyBottomButton";

export const MainPanel = () => {
    return <React.Fragment>
        <WelcomeRow/>
        <FastActionsRow/>
        <NewsBlock style={{marginTop: 40}} count={1} showNext/>
        <CreateCompanyBottomButton/>
    </React.Fragment>
}