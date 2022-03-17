import bridge from "@vkontakte/vk-bridge";
import {useEffect} from "react";

export const useVKBridge = () => {
    useEffect(() => {
        bridge.subscribe(event => {
            console.log(event)
        })
        bridge.send('VKWebAppInit')
    }, [])
}