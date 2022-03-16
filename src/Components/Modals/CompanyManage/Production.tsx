import React from 'react'
import {
    Avatar, Button, Caption,
    Cell,
    Group,
    Header,
    HorizontalScroll, MiniInfoCell,
    ModalPageHeader,
    PanelHeaderClose, Progress, Spacing,
    Spinner
} from "@vkontakte/vkui";
import {IOSLikeIconSmall} from "../../Common/IOSLikeIconSmall";
import {
    Icon16Done, Icon16ErrorCircleFill,
    Icon28DiamondOutline,
    Icon28MoneyRequestOutline, Icon28OnOffOutline, Icon28SettingsOutline,
    Icon28SpeedometerMiddleOutline
} from "@vkontakte/icons";
import {useActions} from "../../../Hooks/useActions";
import {VKUIModals} from "../../../Redux/Reducers/vkui";
import {useCompanyQuery, useGetAllProdLinesQuery, useGetProductMetaQuery} from "../../../generated/graphql";
import {useTypedSelector} from "../../../Hooks/useTypedSelector";

interface props {

}

export const CompanyManageProductionModal = () => {
    const {VKUIModalSet} = useActions()
    const VKUI = useTypedSelector(s => s.vkui)
    const {data} = useGetAllProdLinesQuery({variables: {owner: VKUI.activeCompanyOverview}})

    return <React.Fragment>
        <ModalPageHeader left={<PanelHeaderClose onClick={() => VKUIModalSet(null)}/>}>
            Производство
        </ModalPageHeader>
        <Group>
            <HorizontalScroll>
                <div style={{display: 'flex'}}>
                    <IOSLikeIconSmall
                        onClick={() => VKUIModalSet(VKUIModals.COMPANY_MANAGE_PRODUCTION_NEW)}
                        icon={<Icon28DiamondOutline/>}
                        header={'Новая линия'}
                        colorScheme={'blue'}/>
                    <IOSLikeIconSmall
                        onClick={() => VKUIModalSet(VKUIModals.COMPANY_MANAGE_FINANCIAL_ADD_CARD)}
                        icon={<Icon28SpeedometerMiddleOutline/>}
                        header={'Мощность'}
                        colorScheme={'peach'}
                    />
                </div>
            </HorizontalScroll>
        </Group>
        <Group header={<Header mode={'secondary'}>линии</Header>}>
            {data?.getProdLines.map((v, i) => {
                return <Cell key={i+'line'} description={`линия ${i+1}`} before={<Avatar>{
                    v.product ? <Icon28SettingsOutline className={'spinningAccent'}/> :
                        <Icon28OnOffOutline style={{color: 'var(--dynamic_red)'}}/>
                }</Avatar>}>
                    {v.product ? v.product : 'Пустая линия'}
                </Cell>
            })}
        </Group>
        <Group header={<Header mode={'secondary'}>требуемые ресурсы</Header>}>
            <MiniInfoCell before={<Icon16Done width={20} height={20}/>} after={'5/5'}>Алюминий</MiniInfoCell>
            <MiniInfoCell before={<Icon16ErrorCircleFill width={20} height={20}/>} after={'2/5'}>Кремний</MiniInfoCell>
        </Group>
        <Group>
            <Caption style={{textAlign: 'center', padding: 10}} level={'2'} weight={'regular'}>Произведенные товары автоматически доставляются на склад</Caption>
        </Group>
    </React.Fragment>
}