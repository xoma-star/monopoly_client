import React from 'react'
import {Cell, Group, Header, HorizontalScroll, ModalPageHeader, PanelHeaderClose} from "@vkontakte/vkui";
import {IOSLikeIconSmall} from "../../Common/IOSLikeIconSmall";
import {
    Icon28BankOutline,
    Icon28DevicesOutline,
    Icon28MoneyRequestOutline,
    Icon28MoneySendOutline,
    Icon28StorefrontOutline,
    Icon28Users3Outline
} from "@vkontakte/icons";
import {useActions} from "../../../Hooks/useActions";
import {VKUIModals} from "../../../Redux/Reducers/vkui";

interface props {

}

export const CompanyManageFinancialModal = () => {
    const {VKUIModalSet} = useActions()
    return <React.Fragment>
        <ModalPageHeader left={<PanelHeaderClose onClick={() => VKUIModalSet(null)}/>}>
            Финансы
        </ModalPageHeader>
        <Group header={<Header mode={'secondary'}>баланс</Header>}>
            <HorizontalScroll>
                <div style={{display: 'flex'}}>
                    <IOSLikeIconSmall icon={<Icon28BankOutline/>} header={'Кредит'} colorScheme={'blue'}/>
                    <IOSLikeIconSmall onClick={() => VKUIModalSet(VKUIModals.COMPANY_MANAGE_FINANCIAL_ADD_CARD)} icon={<Icon28MoneySendOutline/>} header={'Пополнить'} colorScheme={'peach'}/>
                    <IOSLikeIconSmall onClick={() => VKUIModalSet(VKUIModals.COMPANY_MANAGE_FINANCIAL_WITHDRAW_CARD)} icon={<Icon28MoneyRequestOutline/>} header={'Снять'} colorScheme={'violet'}/>
                </div>
            </HorizontalScroll>
            <Cell after={50}>
                Текущий баланс
            </Cell>
            <Cell after={20}>
                Ежедневный расход
            </Cell>
            <Cell after={30}>
                Ежедневный доход
            </Cell>
        </Group>
        <Group header={<Header mode={'secondary'}>листинг</Header>}>
            <HorizontalScroll>
                <div style={{display: 'flex'}}>
                    <IOSLikeIconSmall icon={<Icon28Users3Outline/>} header={'IPO'} colorScheme={'peach'}/>
                    <IOSLikeIconSmall icon={<Icon28DevicesOutline/>} header={'Выпуск'} colorScheme={'yellow'}/>
                    <IOSLikeIconSmall icon={<Icon28StorefrontOutline/>} header={'На бирже'} colorScheme={'blue'}/>
                </div>
            </HorizontalScroll>
        </Group>
    </React.Fragment>
}