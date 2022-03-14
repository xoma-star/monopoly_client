import {useEffect} from "react";
import {firebaseLogin} from "../Firebase/auth";
import {useActions} from "./useActions";
import {useCreateUserMutation} from "../generated/graphql";
import {VKUI_PANELS} from "../Constants/VKUI";

export const useFirebase = () => {
    const {setUserDocId, VKUIhistoryPush} = useActions()
    const [createUser] = useCreateUserMutation()
    useEffect(() => {
        const update = async (r: string) => {
            //UserCredential
            //setFirebaseToken(await firebaseToken(r))
            setUserDocId(r)
        }
        const a = 250
        firebaseLogin(`${a}@mono.poly`, '123456')
            .then(async r => update(r.user.uid))
            .catch(async () => {
                // firebaseSignup(a).then(async r => {
                // await firebaseDocCreate(r.user.uid)
                const r = await createUser({variables: {vkUserId: a}})
                if (!r.data) return
                await update(r.data?.createUser)
                VKUIhistoryPush({panel: VKUI_PANELS.WELCOME, view: 'main'})
                //await update()
                //}
            })
    }, [])
}