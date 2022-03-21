import {useCompanyQuery, useRecruitWorkerMutation, Worker} from "../../../generated/graphql";
import {useTypedSelector} from "../../../Hooks/useTypedSelector";
import React, {useEffect, useState} from 'react'
import {
    Avatar,
    Button,
    Caption,
    Group,
    ModalPageHeader,
    PanelHeaderClose,
    RichCell,
    withModalRootContext
} from "@vkontakte/vkui";
import {Icon28EmployeeOutline} from "@vkontakte/icons";
import {useActions} from "../../../Hooks/useActions";
import PropTypes from "prop-types";

interface props {
    updateModalHeight: any
}

const CompanyManageSummaries = ({updateModalHeight}: props) => {
    const {VKUIModalSet} = useActions()
    const VKUI = useTypedSelector(s => s.vkui)
    const [recruit, newData] = useRecruitWorkerMutation()
    const [display, setDisplay] = useState<Worker[]>([])
    const {data} = useCompanyQuery({variables: {companyId: VKUI.activeCompanyOverview}, fetchPolicy: 'network-only'})
    useEffect(() => {
        if(typeof data?.company?.summaries !== 'undefined') setDisplay(data?.company?.summaries)
        if(typeof newData.data?.recruit !== 'undefined') setDisplay(newData.data?.recruit)
        updateModalHeight()
    },[data, newData])
    return <React.Fragment>
        <ModalPageHeader left={<PanelHeaderClose onClick={() => VKUIModalSet(null)}/>}>Резюме</ModalPageHeader>
        <Group>
            {display.map((v, i) => <RichCell
                key={v.hash}
                disabled
                before={<Avatar size={64}><Icon28EmployeeOutline style={{color: 'var(--accent)'}}/></Avatar>}
                multiline
                bottom={<Caption weight={'regular'} level={'1'}>
                    {v.highEducated ? 'Высшее образование' : 'Без высшего образования'}
                    <br/>
                    Производительность труда - {v.baseProduction}
                </Caption>}
                after={`${v.salary} р/мес`}
                actions={
                    <div style={{display: 'flex'}}>
                        <Button onClick={() => recruit({variables: {companyID: VKUI.activeCompanyOverview, workerHash: v.hash}})}>Принять</Button>
                        <Button mode="secondary">Отклонить</Button>
                    </div>
                }
            >
                {v.name}
            </RichCell>)}
        </Group>
    </React.Fragment>
}

CompanyManageSummaries.propTypes = {
    updateModalHeight: PropTypes.func
}

export default withModalRootContext(CompanyManageSummaries)