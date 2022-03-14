import React from "react";
import {Avatar, Gradient, Title} from "@vkontakte/vkui";

interface props {
    logo: string | React.ReactFragment,
    name: string
}

export const CompanyHeader: React.FC<props> = ({logo, name}: props) => {
    return <Gradient style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: 32,
    }}>
        <Avatar
            style={{marginBottom: 20, objectFit: 'contain'}}
            src={typeof logo === 'string' ? logo : ''}
            children={typeof logo !== 'string' ? logo : ''}
            size={216}/>
        <Title level={'1'}>{name}</Title>
    </Gradient>
}