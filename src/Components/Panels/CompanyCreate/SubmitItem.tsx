import {Button, FixedLayout, FormItem} from "@vkontakte/vkui";
import React, {useState} from "react";
import {firebaseUpload} from "../../../Firebase/storage";
import {useTypedSelector} from "../../../Hooks/useTypedSelector";
import {VKUI_PANELS} from "../../../Constants/VKUI";
import {useActions} from "../../../Hooks/useActions";
import {useCreateCompanyMutation, usePushUserCompanyMutation} from "../../../generated/graphql";

interface props {
    name: string,
    file: File | null,
    location: string
}

export const SubmitItem = ({location, name, file}: props) => {
    const [loading, setLoading] = useState(false)
    const {docId} = useTypedSelector(s => s.user)
    const [create] = useCreateCompanyMutation()
    const [push] = usePushUserCompanyMutation()

    const {setActiveCompany, VKUIhistoryPush, VKUIHistoryBack} = useActions()

    const createHandler = async () => {
        setLoading(true)
        const filePath = await firebaseUpload(file, docId)
        if (typeof filePath === 'undefined') return
        if (!docId) return
        const {data} = await create({
            variables: {
                location,
                logo: filePath,
                name,
                owner: docId
            }
        })
        if (!data) return
        const pushData = await push({variables: {companyID: data.createCompany, docID: docId}})
        if(!pushData.data?.pushUserCompany) return
        setLoading(false)
        setActiveCompany(data.createCompany)
        VKUIHistoryBack()
        VKUIhistoryPush({panel: VKUI_PANELS.COMPANY_OVERVIEW, view: 'main'})
    }

    const disabledCondition = loading || name.length <= 0 || !file

    return <FixedLayout filled vertical={'bottom'}>
        <FormItem>
            <Button loading={loading} disabled={disabledCondition} onClick={createHandler} stretched
                    size={'l'}>Создать</Button>
        </FormItem>
    </FixedLayout>
}