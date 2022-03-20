import {
    Avatar,
    Button,
    Cell,
    FormItem,
    FormLayout,
    Link,
    ModalCard,
    Switch
} from "@vkontakte/vkui";
import {Icon28OnOffOutline, Icon28WheelOutline, Icon56UsersOutline} from "@vkontakte/icons";
import React, {useEffect, useState} from "react";
import {useCompanyQuery, useSetCompanyRecruitingMutation} from "../../../generated/graphql";
import {useTypedSelector} from "../../../Hooks/useTypedSelector";

interface props{
    id: string
}

export const WorkersVacancyCard = ({id}: props) => {
    const [active, setActive] = useState<boolean>(false)
    const VKUI = useTypedSelector(s => s.vkui)
    const {data, loading} = useCompanyQuery({variables: {companyId: VKUI.activeCompanyOverview}, fetchPolicy: "network-only"})
    const [update] = useSetCompanyRecruitingMutation({variables: {companyID: VKUI.activeCompanyOverview, value: !active}})

    const handler = async () => {
        if(loading) return
        await update()
        setActive(!active)
    }

    useEffect(() => {
        if(typeof data?.company?.recruiting !== 'undefined') setActive(data.company.recruiting)
    }, [data])

    return <ModalCard
        header={'Вакансии'}
        id={id}
        icon={<Icon56UsersOutline/>}
        actions={<Button loading={false} disabled={false} size={'l'}>Готово</Button>}
    >

        <Cell after={<Switch checked={active} onChange={handler}/>}>Принимать резюме</Cell>
        <Cell before={<Avatar>{
            active ? <Icon28WheelOutline width={40} height={40} className={'spinningAccent'}/> :
                <Icon28OnOffOutline style={{color: 'var(--dynamic_red)'}}/>
        }</Avatar>}
            description={<Link>Подробнее</Link>}
        >
            {active ? 'Ждем отклика от рабочих' : 'Набор не ведется'}
        </Cell>
    </ModalCard>
}