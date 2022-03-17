import {VKUI_PANELS} from "../../Constants/VKUI";
import {AppearanceSchemeType} from "@vkontakte/vk-bridge";

export type VKUIhistory = {
    view: string,
    panel: string
}

export enum VKUIActionTypes {
    SET_PANEL = 'SET_PANEL',
    SET_VIEW = 'SET_VIEW',
    SET_ACTIVE_COMPANY_OVERVIEW = 'SET_ACTIVE_COMPANY_OVERVIEW',
    HISTORY_BACK = 'HISTORY_BACK',
    HISTORY_PUSH = 'HISTORY_ADD',
    SET_MODAL = 'SET_MODAL',
    SET_APPEARANCE = 'SET_APPEARANCE'
}

export enum VKUIModals {
    COMPANY_MANAGE_FINANCIAL = 'COMPANY_MANAGE_FINANCIAL',
    COMPANY_MANAGE_FINANCIAL_ADD_CARD = 'COMPANY_MANAGE_FINANCIAL_ADD_CARD',
    COMPANY_MANAGE_FINANCIAL_WITHDRAW_CARD = 'COMPANY_MANAGE_FINANCIAL_WITHDRAW_CARD',
    COMPANY_MANAGE_WORKERS = 'COMPANY_MANAGE_WORKERS',
    COMPANY_MANAGE_WAREHOUSES = 'COMPANY_MANAGE_WAREHOUSES',
    COMPANY_MANAGE_PRODUCTION = 'COMPANY_MANAGE_PRODUCTION',
    COMPANY_MANAGE_PRODUCTION_NEW = 'COMPANY_MANAGE_PRODUCTION_NEW'
}

interface State {
    view: string,
    panel: string,
    activeCompanyOverview: string,
    history: VKUIhistory[],
    modal: (null | VKUIModals)[],
    scheme: AppearanceSchemeType
}

interface StringVKUIAction{
    type: VKUIActionTypes.SET_ACTIVE_COMPANY_OVERVIEW,
    payload: string
}
interface ModalVKUIAction{
    type: VKUIActionTypes.SET_MODAL,
    payload: VKUIModals| null
}
interface HistoryVKUIAction{
    type: VKUIActionTypes.HISTORY_PUSH,
    payload: VKUIhistory
}
interface HistoryVKUIActionPop{
    type: VKUIActionTypes.HISTORY_BACK
}
interface SchemeVKUIAction{
    type: VKUIActionTypes.SET_APPEARANCE,
    payload: AppearanceSchemeType
}

export type VKUIAction = StringVKUIAction | HistoryVKUIAction | HistoryVKUIActionPop | ModalVKUIAction | SchemeVKUIAction

const defaultState: State = {
    view: 'main',
    panel: 'welcome',
    activeCompanyOverview: "",
    history: [{view: 'main', panel: VKUI_PANELS.MAIN}],
    modal: [null],
    scheme: 'bright_light'
}

export const vkuiReducer = (state: State = defaultState, action: VKUIAction): State => {
    let h = [...state.history]
    let mh = [...state.modal]
    switch (action.type) {
        case VKUIActionTypes.SET_ACTIVE_COMPANY_OVERVIEW: return {...state, activeCompanyOverview:  action.payload}
        case VKUIActionTypes.HISTORY_BACK:
            if (state.history.length > 1) h.pop()
            return {...state, history: h}
        case VKUIActionTypes.HISTORY_PUSH:
            h.push(action.payload)
            return {...state, history: h}
        case VKUIActionTypes.SET_MODAL:
            if(action.payload) mh.push(action.payload)
            else if(mh.length > 1) mh.pop()
            return {...state, modal: mh}
        case VKUIActionTypes.SET_APPEARANCE:
            return {...state, scheme: action.payload}
        default:
            return state
    }
}