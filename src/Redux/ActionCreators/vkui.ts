import {VKUIAction, VKUIActionTypes, VKUIhistory, VKUIModals} from "../Reducers/vkui";
import {Dispatch} from "redux";
import {AppearanceSchemeType} from "@vkontakte/vk-bridge";

// export const setActivePanel = (panel: string) => {
//     alert('deprecated')
//     return (dispatch: Dispatch<VKUIAction>) => {
//         dispatch({type: VKUIActionTypes.SET_PANEL, payload: panel})
//     }
// }
//
// export const setActiveView = (view: string) => {
//     alert('deprecated')
//     return (dispatch: Dispatch<VKUIAction>) => {
//         dispatch({type: VKUIActionTypes.SET_VIEW, payload: view})
//     }
// }

export const setActiveCompany = (c: string) => {
    return (dispatch: Dispatch<VKUIAction>) => {
        dispatch({type: VKUIActionTypes.SET_ACTIVE_COMPANY_OVERVIEW, payload: c})
    }
}

export const VKUIhistoryPush = (p: VKUIhistory) => {
    return (dispatch: Dispatch<VKUIAction>) => {
        dispatch({type: VKUIActionTypes.HISTORY_PUSH, payload: p})
    }
}

export const VKUIHistoryBack = () => {
    return (dispatch: Dispatch<VKUIAction>) => {
        dispatch({type: VKUIActionTypes.HISTORY_BACK})
    }
}

export const VKUIModalSet = (p: null | VKUIModals) => {
    return (dispatch: Dispatch<VKUIAction>) => {
        dispatch({type: VKUIActionTypes.SET_MODAL, payload: p})
    }
}

export const VKUISchemeSet = (p: AppearanceSchemeType) => {
    return (dispatch: Dispatch<VKUIAction>) => {
        dispatch({type: VKUIActionTypes.SET_APPEARANCE, payload: p})
    }
}