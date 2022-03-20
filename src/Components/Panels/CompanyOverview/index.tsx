import {CompanyHeader} from "../../Common/Blocks/CompanyHeader";
import React from "react";
import {PanelHeader, PanelHeaderBack, Spinner} from "@vkontakte/vkui";
import {useActions} from "../../../Hooks/useActions";
import {useTypedSelector} from "../../../Hooks/useTypedSelector";
import {useCompanyQuery} from "../../../generated/graphql";
import {CompanyBody} from "./CompanyBody";

export const CompanyOverviewPanel = () => {
    const {VKUIHistoryBack} = useActions()
    const VKUI = useTypedSelector(s => s.vkui)
    const {data, loading} = useCompanyQuery({variables: {companyId: VKUI.activeCompanyOverview}})

    if (!data?.company || loading) return <Spinner/>
    return <React.Fragment>
        <PanelHeader left={<PanelHeaderBack onClick={VKUIHistoryBack}/>}>Компания</PanelHeader>
        <CompanyHeader logo={data.company.logo} name={data.company.name}/>
        <CompanyBody/>
    </React.Fragment>
}