import bridge from "@vkontakte/vk-bridge";
import {useEffect} from "react";
import {VKUISchemeSet} from "../Redux/ActionCreators/vkui";

export const useVKBridge = () => {
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