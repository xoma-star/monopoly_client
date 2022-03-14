import {firebaseApp} from "./config";
import {doc, getFirestore, setDoc} from 'firebase/firestore'

const firestore = getFirestore(firebaseApp)

export const firebaseDocCreate = async (docID: string) => {
    const docRef = doc(firestore, `users/${docID}`)
    return await setDoc(docRef, {e: 'da'})
}