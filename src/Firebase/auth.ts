import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, UserCredential} from "firebase/auth"
import {firebaseApp} from "./config";

const auth = getAuth(firebaseApp)

export const firebaseLogin = async (login: string, password: string) => {
    return await signInWithEmailAndPassword(auth, login, password)
}

export const firebaseSignup = async (login: string) => {
    return await createUserWithEmailAndPassword(auth, login, login)
}

export const firebaseToken = async (user: UserCredential) => {
    return user.user.getIdToken()
}
// connectAuthEmulator(auth, "http://localhost:3000")