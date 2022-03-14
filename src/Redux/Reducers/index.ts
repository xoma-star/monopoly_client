import {vkuiReducer} from "./vkui";
import {userReducer} from "./user";

export const mainReducer = {
    vkui: vkuiReducer,
    user: userReducer
}