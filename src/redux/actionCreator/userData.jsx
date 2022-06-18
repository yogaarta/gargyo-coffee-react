import { getProfile, patchProfile } from "../../utility/axios";
import { getUserDataString, patchUserDataString } from "./actionString";

export const getUserDataAction = (token) =>({
    type: getUserDataString,
    payload: getProfile(token)
})

export const patchUserDataAction = (token, body) => ({
    type: patchUserDataString,
    payload: patchProfile(token, body)
})