import {File, FormItem} from "@vkontakte/vkui";
import {Icon28Camera} from "@vkontakte/icons";
import React from "react";

interface props {
    callback: Function,
    file: File | null
}

export const LogoItem = ({callback}: props) => {
    return <FormItem style={{display: 'flex'}}>
        <File mode={'tertiary'} accept={'image/*'}
              onChange={(e) => {
                  if (e.target.files) callback(e.target.files[0])
              }}
              stretched before={<Icon28Camera/>} controlSize={'l'}>
            Выбрать логотип
        </File>
    </FormItem>
}