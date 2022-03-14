import {FormItem, Select} from "@vkontakte/vkui";
import React from "react";
import {locations} from "../../../Constants/locations";

interface props {
    callback: Function,
    value: string
}

export const LocationItem = ({callback, value}: props) => {
    return <FormItem top={'Штаб-квартира'}>
        <Select
            value={value}
            onChange={(e) => callback(e.currentTarget.value)}
            options={locations.map((v) => ({
                label: v.name,
                value: v.id
            }))}>
        </Select>
    </FormItem>
}