import {Icon56FragmentsOutline} from "@vkontakte/icons";
import {Button, Placeholder} from "@vkontakte/vkui";
import React, {useState} from "react";
import {useActions} from "../../../Hooks/useActions";
import {useCreateProductionLineMutation} from "../../../generated/graphql";
import {useTypedSelector} from "../../../Hooks/useTypedSelector";

export const NoProdLines = () => {
    const [loading, setLoading] = useState(false)
    const [response, setResponse] = useState(-1)
    const {VKUIModalSet} = useActions()
    const VKUI = useTypedSelector(s => s.vkui)
    const [mutate] = useCreateProductionLineMutation()

    const confirm = async () => {
        setLoading(true)
        const res = await mutate({variables: {companyID: VKUI.activeCompanyOverview}})
        setResponse(typeof res?.data?.createProdLine !== 'undefined' ? res.data?.createProdLine : 2)
        setLoading(false)
    }
    const dismiss = () => VKUIModalSet(null)

    return <Placeholder
            header={'Купить производственную линию'}
            icon={<Icon56FragmentsOutline/>}
            action={<div style={{display: 'flex', padding: 15}}>
                {response === -1 && <React.Fragment>
                    <Button loading={loading} disabled={loading} onClick={confirm} style={{margin: 'auto'}} size={'l'}>Купить</Button>
                    <Button onClick={dismiss} style={{margin: 'auto'}} size={'l'} mode={'secondary'}>Вернуться</Button>
                </React.Fragment>}
                {response === 0 && <Button size={'l'} onClick={dismiss} stretched mode={'tertiary'} appearance={'positive'}>Линия создана</Button>}
                {response === 1 && <Button size={'l'} onClick={dismiss} stretched mode={'tertiary'} appearance={'negative'}>Недостаточно средств</Button>}
                {response === 2 && <Button size={'l'} onClick={dismiss} stretched mode={'tertiary'} appearance={'negative'}>Неизвестная ошибка</Button>}
            </div>}
        >
            Стоимость линии - 300$
        </Placeholder>
}