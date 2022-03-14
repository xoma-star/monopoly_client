import {firebaseApp} from "./config";
import {getDownloadURL, getStorage, ref, uploadBytesResumable, UploadTaskSnapshot} from "firebase/storage"

const storage = getStorage(firebaseApp)

export const firebaseUpload = async (file: File | null, docID: string | null, callback?: (snap: UploadTaskSnapshot) => void) => {
    if (!file || !docID) return
    const storageRef = ref(storage, `userUploads/${docID}/${file.name}`)
    const uploadTask = await uploadBytesResumable(storageRef, file)
    return getDownloadURL(uploadTask.ref)
    // if(callback){
    //     uploadTask.on('state_changed', (snap) => {
    //         callback(snap)
    //     })
    // }
}