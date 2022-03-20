import React from 'react'
import {Cell, Group, Header, HorizontalScroll, ModalPageHeader, PanelHeaderClose} from "@vkontakte/vkui";
import {IOSLikeIconSmall} from "../../Common/IOSLikeIconSmall";
import {
    Icon20UsersOutline, Icon20UsersSlashOutline, Icon28BillheadOutline
} from "@vkontakte/icons";
import {useActions} from "../../../Hooks/useActions";
import {VKUIModals} from "../../../Redux/Reducers/vkui";

interface props {

}

export const CompanyManageWorkersModal = () => {
    const {VKUIModalSet} = useActions()
    return <React.Fragment>
        <ModalPageHeader left={<PanelHeaderClose onClick={() => VKUIModalSet(null)}/>}>
            Отдел кадров
        </ModalPageHeader>
        <Group>
            <HorizontalScroll>
                <div style={{display: 'flex'}}>
                    <IOSLikeIconSmall
                        onClick={() => VKUIModalSet(VKUIModals.COMPANY_MANAGE_WORKERS_VACANCY)}
                        icon={<Icon20UsersOutline width={28} height={28}/>}
                        header={'Набор'}
                        colorScheme={'peach'}/>
                    <IOSLikeIconSmall
                        onClick={() => VKUIModalSet(VKUIModals.COMPANY_MANAGE_WORKERS_SUMMARIES)}
                        icon={<Icon28BillheadOutline width={28} height={28}/>}
                        header={'Резюме'}
                        colorScheme={'yellow'}/>
                    <IOSLikeIconSmall
                        onClick={() => VKUIModalSet(VKUIModals.COMPANY_MANAGE_FINANCIAL_WITHDRAW_CARD)}
                        icon={<Icon20UsersSlashOutline width={28} height={28}/>}
                        header={'Уволить'}
                        colorScheme={'violet'}/>
                </div>
            </HorizontalScroll>
            <Cell after={50}>
                Всего рабочих
            </Cell>
            <Cell after={20}>
                С высшим образованием
            </Cell>
        </Group>
    </React.Fragment>
}