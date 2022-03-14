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
    Icon28MoneyRequestOutline, Icon28SettingsOutline,
    Icon28SpeedometerMiddleOutline
} from "@vkontakte/icons";
import {useActions} from "../../../Hooks/useActions";
import {VKUIModals} from "../../../Redux/Reducers/vkui";

interface props {

}

export const CompanyManageProductionModal = () => {
    const {VKUIModalSet} = useActions()
    return <React.Fragment>
        <ModalPageHeader left={<PanelHeaderClose onClick={() => VKUIModalSet(null)}/>}>
            Производство
        </ModalPageHeader>
        <Group>
            <HorizontalScroll>
                <div style={{display: 'flex'}}>
                    <IOSLikeIconSmall icon={<Icon28DiamondOutline/>} header={'Тип'} colorScheme={'blue'}/>
                    <IOSLikeIconSmall onClick={() => VKUIModalSet(VKUIModals.COMPANY_MANAGE_FINANCIAL_ADD_CARD)} icon={<Icon28SpeedometerMiddleOutline/>} header={'Мощность'} colorScheme={'peach'}/>
                </div>
            </HorizontalScroll>
        </Group>
        <Group>
            <Cell description={'сейчас производится'} before={<Avatar><Icon28SettingsOutline className={'spinningAccent'}/></Avatar>}>
                Процессоры
            </Cell>
            <div style={{padding: 10}}>
                <Spacing size={10}/>
                <Progress style={{height: 8, borderRadius: 50}} value={47}/>
                <Spacing size={20}/>
                <Button mode={'secondary'} stretched>Отмена</Button>
            </div>
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