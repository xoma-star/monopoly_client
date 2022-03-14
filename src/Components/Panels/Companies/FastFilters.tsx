import {Group, SubnavigationBar, SubnavigationButton} from "@vkontakte/vkui";
import React, {useState} from "react";

interface props{
    callback: Function
}

export const CompaniesFastFilters = ({callback}: props) => {
    const [selected, setSelected] = useState<null | string>(null)
    const clickHandler = (p: string) => {
        return () => {
            const v = p === selected ? null : p
            setSelected(v)
            callback(v)
        }
    }
    return <Group>
        <SubnavigationBar>
            {[
                {label: 'Мои', value: 'owned'},
                {label: 'Высокая капитализация', value: 'highCap'},
                {label: 'Дешевые', value: 'cheap'},
                {label: 'Дорогие', value: 'costy'},
                {label: 'Новые', value: 'new'}
            ].map(v => <SubnavigationButton key={v.value} selected={selected === v.value}
                                            onClick={clickHandler(v.value)}>{v.label}</SubnavigationButton>)}
        </SubnavigationBar>
    </Group>
}