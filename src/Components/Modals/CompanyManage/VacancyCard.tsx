import {Avatar, Button, Cell, Checkbox, FormItem, FormLayout, Input, Link, ModalCard, Slider} from "@vkontakte/vkui";
import {Icon28OnOffOutline, Icon28SettingsOutline, Icon28WheelOutline, Icon56UsersOutline} from "@vkontakte/icons";
import React, {useState} from "react";
import bridge from "@vkontakte/vk-bridge";
import useDebounce from "../../../Hooks/useDebounce";

interface props{
    id: string
}

export const WorkersVacancyCard = ({id}: props) => {
    const [vac, setVac] = useState(0)
    const debounced = useDebounce(vac, 500)

    const hapticHandler = async (e: number) => {
        bridge.send('VKWebAppTapticImpactOccurred', {style: 'light'})
        setVac(e)
    }
    return <ModalCard
        header={'Вакансии'}
        id={id}
        icon={<Icon56UsersOutline/>}
        actions={<Button loading={debounced !== vac} disabled={debounced !== vac} size={'l'}>Готово</Button>}
    >
        <FormLayout>
            <FormItem top={'Открытые вакансии'}>
                <Slider onChange={hapticHandler} step={1} max={50} value={vac}/>
            </FormItem>
            <FormItem>
                <Input disabled value={vac}/>
            </FormItem>
            <FormItem>
                <Checkbox>Набирать с высшим образованием</Checkbox>
            </FormItem>
            <Cell before={<Avatar>{
                debounced ? <Icon28WheelOutline width={40} height={40} className={'spinningAccent'}/> :
                    <Icon28OnOffOutline style={{color: 'var(--dynamic_red)'}}/>
            }</Avatar>}
                description={<Link>Подробнее</Link>}
            >
                {debounced ? 'Ждем отклика от рабочих' : 'Набор не ведется'}
            </Cell>
        </FormLayout>
    </ModalCard>
}