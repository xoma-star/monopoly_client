import React from "react"
import {Caption, HorizontalCell} from "@vkontakte/vkui";
//@ts-ignore
import style from '../../Stylesheets/IOSLikeIcons.module.css'

interface props {
    icon: React.ReactFragment,
    header?: string,
    colorScheme?: string,
    onClick?: Function
}

export const IOSLikeIconSmall = ({icon, header, colorScheme, onClick}: props) => {
    const colorStyle = {
        color: `var(--soft_${colorScheme}_accent)`,
        backgroundColor: `var(--soft_${colorScheme}_background)`
    }
    return <HorizontalCell
        style={{margin: 'auto'}}
        size={'s'}
        header={<Caption level={'1'} weight={'regular'}>{header}</Caption>}
        onClick={() => {
            if (onClick) onClick()
        }}
    >
        <div style={colorStyle} className={style.iconWrapper}>
            {icon}
        </div>
    </HorizontalCell>
}