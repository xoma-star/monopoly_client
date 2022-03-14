import {Button, FormItem, Input, ModalCard} from "@vkontakte/vkui";
import {Icon56MoneyTransferOutline} from "@vkontakte/icons";
import {useState} from "react";
import {useTransferBalanceToCompanyMutation} from "../../../generated/graphql";
import {useTypedSelector} from "../../../Hooks/useTypedSelector";
import {useActions} from "../../../Hooks/useActions";

interface props{
    id: string,
    withdraw: boolean
}

export const FinancialModalCardAdd = ({id, withdraw}: props) => {
    const [input, setInput] = useState(0)
    const [loading, setLoading] = useState(false)
    const [result, setResult] = useState(-1)
    const {user, vkui} = useTypedSelector(s => s)
    const {VKUIModalSet} = useActions()

    const [transfer] = useTransferBalanceToCompanyMutation()
    const clickHandler = async () => {
        setLoading(true)
        if(!user.docId || !vkui.activeCompanyOverview) return
        const {data} = await transfer({variables: {docID: user.docId, companyID: vkui.activeCompanyOverview, value: withdraw ? -input : input}})
        setResult(typeof data?.transferBalanceToCompany !== 'undefined' ? data?.transferBalanceToCompany : 1)
        setLoading(false)
    }
    return <ModalCard
        subheader={'введите сумму'}
        header={withdraw ? 'Снять со счета фирмы' : 'Перевести на счет фирмы'}
        id={id}
        icon={<Icon56MoneyTransferOutline/>}
        actions={
            result === 0 ? <Button size={'l'} mode={'secondary'} onClick={() => VKUIModalSet(null)}>Закрыть</Button>:
                <Button loading={loading} onClick={clickHandler} disabled={input < 1 || loading} size={'l'}>{withdraw ? 'Снять' : 'Пополнить'}</Button>
        }
    >
        <FormItem
            bottom={
                result >= 0 ? (
                    result === 0 ? (withdraw ? `Переведено ${input} со счета компании` : `Переведено ${input} на счет компании`) : (
                        result === 1 ? `Неизвестная ошибка. Попробуйте еще раз.` :
                            `Недостаточно средств.`
                    )
                ) : ''
            }
            status={result >= 0 ? (result > 0 ? 'error' : 'valid') : 'default'}
        >
            <Input disabled={result === 0} value={input.toString()} onChange={(e) => setInput(Number(e.currentTarget.value))} type={'number'}/>
        </FormItem>
    </ModalCard>
}

export const FinancialModalCardWithdraw = ({id}: props) => {
    const [input, setInput] = useState(0)

    return <ModalCard
        subheader={'введите сумму'}
        header={'Снять со счета фирмы'}
        id={id}
        icon={<Icon56MoneyTransferOutline/>}
        actions={<Button disabled={input < 1} size={'l'}>Снять</Button>}
    >
        <Input value={input.toString()} onChange={(e) => setInput(Number(e.currentTarget.value))} type={'number'}/>
    </ModalCard>
}