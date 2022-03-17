import {Button, Checkbox, FormItem, FormLayout, Input, ModalCard, Slider} from "@vkontakte/vkui";
import {Icon56UsersOutline} from "@vkontakte/icons";
import {useState} from "react";
import bridge from "@vkontakte/vk-bridge";

interface props{
    id: string
}

export const WorkersVacancyCard = ({id}: props) => {
    const [vac, setVac] = useState(0)
    const hapticHandler = async (e: number) => {
        bridge.send('VKWebAppTapticImpactOccurred', {style: 'light'})
        setVac(e)
    }
    return <ModalCard
        header={'Вакансии'}
        id={id}
        icon={<Icon56UsersOutline/>}
        actions={<Button size={'l'}>Готово</Button>}
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
        </FormLayout>
    </ModalCard>
}