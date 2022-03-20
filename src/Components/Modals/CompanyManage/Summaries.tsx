import {useCompanyQuery} from "../../../generated/graphql";
import {useTypedSelector} from "../../../Hooks/useTypedSelector";
import React from 'react'
import {Avatar, Button, Caption, Group, ModalPageHeader, PanelHeaderClose, RichCell} from "@vkontakte/vkui";
import {Icon28EmployeeOutline} from "@vkontakte/icons";
import {useActions} from "../../../Hooks/useActions";

export const CompanyManageSummaries = () => {
    const {VKUIModalSet} = useActions()
    const VKUI = useTypedSelector(s => s.vkui)
    const {data, loading} = useCompanyQuery({variables: {companyId: VKUI.activeCompanyOverview}})
    return <React.Fragment>
        <ModalPageHeader left={<PanelHeaderClose onClick={() => VKUIModalSet(null)}/>}>Резюме</ModalPageHeader>
        <Group>
            {data?.company?.summaries.map(v => <RichCell
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
                        <Button>Принять</Button>
                        <Button mode="secondary">Отклонить</Button>
                    </div>
                }
            >
                {v.name}
            </RichCell>)}
        </Group>
    </React.Fragment>
}