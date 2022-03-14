import {UserAction, UserActionTypes} from "../Reducers/user";
import {Dispatch} from "redux";

export const setFirebaseToken = (a: string) => {
    return (dispatch: Dispatch<UserAction>) => {
        dispatch({type: UserActionTypes.SET_FIREBASE_TOKEN, payload: a})
    }
}

export const setUserDocId = (a: string) => {
    return (dispatch: Dispatch<UserAction>) => {
        dispatch({type: UserActionTypes.SET_USER_DOC, payload: a})
    }
}