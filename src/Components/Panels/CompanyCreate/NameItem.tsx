import {FormItem, Input} from "@vkontakte/vkui";
import React from "react";

interface props {
    callback: Function,
    name: string
}

export const NameItem = ({callback, name}: props) => {
    return <FormItem top={'Название'}>
        <Input value={name} onChange={(e) => callback(e.currentTarget.value)}/>
    </FormItem>
}