import {HorizontalScroll} from "@vkontakte/vkui";
import {IOSLikeIconSmall} from "../../Common/IOSLikeIconSmall";
import {Icon28BankOutline, Icon28EmployeeOutline, Icon28ShoppingCartOutline, Icon28WorkOutline} from "@vkontakte/icons";
import {useActions} from "../../../Hooks/useActions";
import {VKUI_PANELS} from "../../../Constants/VKUI";

export const FastActionsRow = () => {
    const {VKUIhistoryPush} = useActions()
    return <HorizontalScroll style={{marginTop: 30}}>
        <div style={{display: 'flex'}}>
            <IOSLikeIconSmall onClick={() => VKUIhistoryPush({view: 'main', panel: VKUI_PANELS.COMPANIES})}
                              colorScheme={'blue'} icon={<Icon28WorkOutline/>} header={'Компании'}/>
            <IOSLikeIconSmall colorScheme={'violet'} icon={<Icon28ShoppingCartOutline/>} header={'Поставки'}/>
            <IOSLikeIconSmall colorScheme={'yellow'} icon={<Icon28EmployeeOutline/>} header={'Работники'}/>
            <IOSLikeIconSmall colorScheme={'peach'} icon={<Icon28BankOutline/>} header={'Кредиты'}/>
        </div>
    </HorizontalScroll>
}