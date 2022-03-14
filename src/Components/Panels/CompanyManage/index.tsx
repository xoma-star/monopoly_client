import {Cell, Group, PanelHeader, PanelHeaderBack} from "@vkontakte/vkui";
import React from 'react'
import {
    Icon28CancelCircleOutline,
    Icon28CubeBoxOutline,
    Icon28EmployeeOutline,
    Icon28MoneyWadOutline,
    Icon28Newsfeed,
    Icon28PictureOutline,
    Icon28PlaneOutline,
    Icon28SettingsOutline
} from "@vkontakte/icons";
import {useActions} from "../../../Hooks/useActions";
import {VKUIModals} from "../../../Redux/Reducers/vkui";

export const CompanyManagePanel = () => {
    // const VKUI = useTypedSelector(s => s.vkui)
    // const {loading} = useCompanyQuery({variables: {companyId: VKUI.activeCompanyOverview}})
    const {VKUIHistoryBack, VKUIModalSet} = useActions()
    return <React.Fragment>
        <PanelHeader left={<PanelHeaderBack onClick={VKUIHistoryBack}/>}>
            Управление
        </PanelHeader>
        <Group>
            <Cell onClick={() => VKUIModalSet(VKUIModals.COMPANY_MANAGE_FINANCIAL)} description={'снятие со счета, кредитование и т.д.'} before={<Icon28MoneyWadOutline/>}>
                Управление финансами
            </Cell>
            <Cell onClick={() => VKUIModalSet(VKUIModals.COMPANY_MANAGE_WORKERS)} description={'найм, зарплаты, премии и т.д.'} before={<Icon28EmployeeOutline/>}>
                Управление рабочими
            </Cell>
            <Cell onClick={() => VKUIModalSet(VKUIModals.COMPANY_MANAGE_WAREHOUSES)} description={'покупка, продажа и др.'} before={<Icon28CubeBoxOutline/>}>
                Управление складами
            </Cell>
            <Cell description={'покупка, лизинг транспорта и др. '} before={<Icon28PlaneOutline/>}>
                Управление логистикой
            </Cell>
            <Cell onClick={() => VKUIModalSet(VKUIModals.COMPANY_MANAGE_PRODUCTION)} description={'тип продукта, затрачиваемые ресурсы и т.д.'} before={<Icon28SettingsOutline/>}>
                Управление производством
            </Cell>
            <Cell description={'обязательства, входящие предложения и др.'} before={<Icon28Newsfeed/>}>
                Управление контрактами
            </Cell>
            <Cell description={'логотип, название и т.д.'} before={<Icon28PictureOutline/>}>
                Управление брендом
            </Cell>
            <Cell className={'destructive'} before={<Icon28CancelCircleOutline/>}
                  description={'без возможности восстановления'}>
                Покинуть место управляющего
            </Cell>
        </Group>
    </React.Fragment>
}