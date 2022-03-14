export enum UserActionTypes {
    SET_FIREBASE_TOKEN = 'SET_FIREBASE_TOKEN',
    SET_USER_DOC = 'SET_USER_DOC'
}

interface State {
    firebaseToken: string | null,
    docId: string | null,
    vkid: number | null
}

interface FirebaseTokenAction {
    type: UserActionTypes.SET_FIREBASE_TOKEN,
    payload: string
}

interface UserDocAction {
    type: UserActionTypes.SET_USER_DOC,
    payload: string
}

export type UserAction = FirebaseTokenAction | UserDocAction

const defaultState: State = {
    firebaseToken: null,
    docId: null,
    vkid: null
}

export const userReducer = (state: State = defaultState, action: UserAction): State => {
    switch (action.type) {
        case UserActionTypes.SET_FIREBASE_TOKEN:
            return {...state, firebaseToken: action.payload}
        case UserActionTypes.SET_USER_DOC:
            return {...state, docId: action.payload}
        default:
            return state
    }
}