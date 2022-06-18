import axios from "axios";

export const doLogin = (body) => {
    return axios.post(`${process.env.REACT_APP_BE_HOST}/auth`, body)
}

export const getProfile = (token) => {
    const config = { headers: { Authorization: `Bearer ${token}` } }
    return axios.get(`${process.env.REACT_APP_BE_HOST}/users`, config)
}

export const patchProfile = (token, body) => {
    const config = { headers: { Authorization: `Bearer ${token}`, "content-type": "multipart/form-data" } }
    return  axios.patch(`${process.env.REACT_APP_BE_HOST}/users`, body, config)
}

export const deleteHistory = (history) => {
    return axios.patch(`${process.env.REACT_APP_BE_HOST}/transactions/user`, history)
}