import { doLogin } from "../../utility/auth";
import { loginString } from "./actionString";

export const loginAction = (body) => ({
    type: loginString,
    payload: doLogin(body)
})