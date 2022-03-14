import React from 'react'
import {Cell, Group, Header, HorizontalScroll, ModalPageHeader, PanelHeaderClose} from "@vkontakte/vkui";
import {IOSLikeIconSmall} from "../../Common/IOSLikeIconSmall";
import {
    Icon28GridLayoutOutline, Icon28UnarchiveOutline

} from "@vkontakte/icons";
import {useActions} from "../../../Hooks/useActions";
import {VKUIModals} from "../../../Redux/Reducers/vkui";

interface props {

}

export const CompanyManageWarehousesModal = () => {
    const {VKUIModalSet} = useActions()
    return <React.Fragment>
        <ModalPageHeader left={<PanelHeaderClose onClick={() => VKUIModalSet(null)}/>}>
            Склады
        </ModalPageHeader>
        <Group header={<Header mode={'secondary'}>баланс</Header>}>
            <HorizontalScroll>
                <div style={{display: 'flex'}}>
                    <IOSLikeIconSmall
                        onClick={() => VKUIModalSet(VKUIModals.COMPANY_MANAGE_FINANCIAL_ADD_CARD)}
                        icon={<Icon28GridLayoutOutline/>}
                        header={'Обзор'}
                        colorScheme={'peach'}/>
                    <IOSLikeIconSmall
                        onClick={() => VKUIModalSet(VKUIModals.COMPANY_MANAGE_FINANCIAL_WITHDRAW_CARD)}
                        icon={<Icon28UnarchiveOutline/>}
                        header={'Купить'}
                        colorScheme={'violet'}/>
                </div>
            </HorizontalScroll>
        </Group>
    </React.Fragment>
}