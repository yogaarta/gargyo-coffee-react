import { getProfile } from "../../utility/axios";
import { getUserDataString } from "./actionString";

export const getUserDataAction = (token) =>({
    type: getUserDataString,
    payload: getProfile(token)
})