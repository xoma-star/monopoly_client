import React from 'react'
import {Avatar, Button, Caption, Cell, Group, Header} from "@vkontakte/vkui";
import {VKUI_PANELS, VKUI_TEST} from "../../../Constants/VKUI";
import {useCompanyQuery} from "../../../generated/graphql";
import {useTypedSelector} from "../../../Hooks/useTypedSelector";
import {
    Icon28ArchiveOutline,
    Icon28BillheadOutline,
    Icon28CubeBoxOutline,
    Icon28EducationOutline,
    Icon28EmployeeOutline,
    Icon28GridSquareOutline,
    Icon28LocationMapOutline,
    Icon28NewsfeedOutline,
    Icon28TearOffFlyerOutline
} from "@vkontakte/icons";
import {useActions} from "../../../Hooks/useActions";

export const CompanyBody = () => {
    const VKUI = useTypedSelector(s => s.vkui)
    const user = useTypedSelector(s => s.user)
    const {data} = useCompanyQuery({variables: {companyId: VKUI.activeCompanyOverview}})
    const {VKUIHistoryBack, VKUIhistoryPush} = useActions()
    const company = data?.company

    if (typeof company === 'undefined' || !company) {
        VKUIHistoryBack();
        return <div/>
    }
    return <React.Fragment>
        <Group>
            <Cell description={'исполнительный директор'} before={<Avatar size={34} src={VKUI_TEST.AVA}/>}>
                {`${VKUI_TEST.FIRST_NAME} ${VKUI_TEST.LAST_NAME}`}
            </Cell>
            <Cell before={<Icon28LocationMapOutline/>} description={'штаб-квартира'}>
                {company.location}
            </Cell>
        </Group>
        {user.docId === company.owner && <Group style={{padding: 10}}>
            <Button onClick={() => VKUIhistoryPush({panel: VKUI_PANELS.COMPANY_MANAGE, view: 'main'})} stretched
                    size={'l'} mode={'secondary'}>Управление</Button>
        </Group>}
        <Group header={<Header mode={'tertiary'}>Финансы</Header>}>
            <Cell after={'125 кк'} before={<Icon28NewsfeedOutline/>}>
                Капитализация
            </Cell>
            <Cell after={'20%'} before={<Icon28BillheadOutline/>}>
                Маржа
            </Cell>
            <Cell after={'152 кк'} before={<Icon28TearOffFlyerOutline/>}>
                Долговая нагрузка
            </Cell>
            <Cell after={company.balance} before={<Icon28GridSquareOutline/>}>
                Свободные средства
            </Cell>
        </Group>
        {company.workers.total > 0 && <Group header={<Header mode={'tertiary'}>Рабочая сила</Header>}>
            <Cell after={company.workers.total} before={<Icon28EmployeeOutline/>}>
                Рабочие
            </Cell>
            <Cell after={company.workers.highEducated} before={<Icon28EducationOutline/>}
                  description={'из общего кол-ва рабочих'}>
                Высококвалифицированнные
            </Cell>
        </Group>}
        {company.production && <Group header={<Header mode={'tertiary'}>Производство</Header>}>
            <Cell before={<Icon28CubeBoxOutline/>} description={'производимая продукция'}>
                Микропроцессоры
            </Cell>
        </Group>}
        {company.warehouses.length > 0 && <Group header={<Header mode={'tertiary'}>Хранение</Header>}>
            <Cell before={<Icon28ArchiveOutline/>} after={'50%'}>
                Заполнение складов
            </Cell>
        </Group>}
        <Group style={{padding: 10, textAlign: 'center'}}>
            <Caption weight={'regular'} level={'3'}>
                Данные на этой странице не имеют отношения к реальным.<br/>Все совпадения случайны.
            </Caption>
        </Group>
    </React.Fragment>
}