import {File, FormLayout} from "@vkontakte/vkui";
import React, {useEffect, useState} from "react";
import {NameItem} from "./NameItem";
import {VKUI_TEST} from "../../../Constants/VKUI";
import {LogoItem} from "./LogoItem";
import {LocationItem} from "./LocationItem";
import {SubmitItem} from "./SubmitItem";

interface props {
    updateHeaderName: (s: string) => void,
    updateLogo: Function
}

export const CompanyCreateForm: React.FC<props> = ({updateHeaderName, updateLogo}: props) => {
    const [name, setName] = useState(VKUI_TEST.COMPANY_NAME)
    const [file, setFile] = useState<File | null>(null)
    const [location, setLocation] = useState('moscow')

    useEffect(() => {
        updateHeaderName(name)
    }, [name, updateHeaderName])
    useEffect(() => {
        if (file) updateLogo(URL.createObjectURL(file))
    }, [file, updateLogo])

    return <FormLayout>
        <NameItem callback={setName} name={name}/>
        <LocationItem callback={setLocation} value={location}/>
        <LogoItem callback={setFile} file={file}/>
        <SubmitItem location={location} name={name} file={file}/>
    </FormLayout>
}