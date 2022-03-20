import { useEffect } from "react"
import { useActions } from "./useActions";
import {useTypedSelector} from "./useTypedSelector";

export const useHistoryApi = () => {
    const VKUI = useTypedSelector(s => s.vkui)
    const {VKUIModalSet, VKUIHistoryBack} = useActions()
    useEffect(() => {
        window.onpopstate = () => {
            if(VKUI.modal.length > 1) VKUIModalSet(null)
            else if(VKUI.history.length > 1) VKUIHistoryBack()
        }
    }, [VKUI])
}