import bridge from "@vkontakte/vk-bridge";
import {useEffect} from "react";
import {useActions} from "./useActions";

export const useVKBridge = () => {
    const {VKUISchemeSet} = useActions()
    useEffect(() => {
        bridge.subscribe(event => {
            switch (event.detail.type){
                case 'VKWebAppUpdateConfig':
                    VKUISchemeSet(event.detail.data.scheme)
                    break
                default:
            }
        })
        bridge.send('VKWebAppInit')
    }, [])
}