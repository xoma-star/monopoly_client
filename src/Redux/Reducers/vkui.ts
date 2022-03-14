import {VKUI_PANELS} from "../../Constants/VKUI";
import React from "react";

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
    SET_MODAL = 'SET_MODAL'
}

export enum VKUIModals {
    COMPANY_MANAGE_FINANCIAL = 'COMPANY_MANAGE_FINANCIAL',
    COMPANY_MANAGE_FINANCIAL_ADD_CARD = 'COMPANY_MANAGE_FINANCIAL_ADD_CARD',
    COMPANY_MANAGE_FINANCIAL_WITHDRAW_CARD = 'COMPANY_MANAGE_FINANCIAL_WITHDRAW_CARD',
    COMPANY_MANAGE_WORKERS = 'COMPANY_MANAGE_WORKERS',
    COMPANY_MANAGE_WAREHOUSES = 'COMPANY_MANAGE_WAREHOUSES',
    COMPANY_MANAGE_PRODUCTION = 'COMPANY_MANAGE_PRODUCTION'
}

interface State {
    view: string,
    panel: string,
    activeCompanyOverview: string,
    history: VKUIhistory[],
    modal: (null | VKUIModals)[]
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

export type VKUIAction = StringVKUIAction | HistoryVKUIAction | HistoryVKUIActionPop | ModalVKUIAction

const defaultState: State = {
    view: 'main',
    panel: 'welcome',
    activeCompanyOverview: "",
    history: [{view: 'main', panel: VKUI_PANELS.MAIN}],
    modal: [null]
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
        default:
            return state
    }
}