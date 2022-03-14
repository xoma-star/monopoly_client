import React from 'react'
import {Avatar, Button, Cell, Group, PanelHeader, PanelHeaderBack, Search, Spinner} from "@vkontakte/vkui";
import {useActions} from '../../../Hooks/useActions';
import {VKUI_PANELS} from "../../../Constants/VKUI";
import {Icon20FilterOutline} from "@vkontakte/icons";
import {CompaniesFastFilters} from "./FastFilters";
import {useCompanies} from "../../../Hooks/useCompanyFilters";

export const CompaniesPanel = () => {
    const {VKUIHistoryBack, setActiveCompany, VKUIhistoryPush} = useActions()
    const {loading, fastFiltersCallback, inputVal, setInputVal, loadMore, companiesToRender} = useCompanies()

    return <React.Fragment>
        <PanelHeader left={<PanelHeaderBack onClick={VKUIHistoryBack}/>}>Компании</PanelHeader>
        <Group>
            <Search
                icon={<Icon20FilterOutline width={24} height={24}/>}
                onIconClick={(e) => {
                    console.log(e)
                }}
                onChange={(e) => setInputVal(e.currentTarget.value)}
                value={inputVal}
            />
            <CompaniesFastFilters callback={fastFiltersCallback}/>
            {/*{emptyResults && <NotFoundPlaceholder/>}*/}
            {companiesToRender.map((v) =>
                <Cell onClick={() => {
                    setActiveCompany(v.id)
                    VKUIhistoryPush({panel: VKUI_PANELS.COMPANY_OVERVIEW, view: 'main'})
                }} key={v.id} before={<Avatar size={32} src={v.logo}/>}>
                    {v.name}
                </Cell>)}
            {(loading || companiesToRender.length === 0) && <Spinner size={'regular'}/>}
            {!loading && companiesToRender.length > 49 && <Button onClick={loadMore} stretched size={'l'} mode={'tertiary'}>Загрузить еще</Button>}
        </Group>
        {/*<CreateCompanyBottomButton/>*/}
    </React.Fragment>
}