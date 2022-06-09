import { FULFILLED, loginString, PENDING, REJECTED } from "../actionCreator/actionString";

const initialState = {
    userInfo: null,
    isLoading: false,
    err: null
}

const loginReducer = (prevState = initialState, action) => {
    switch (action.type) {
        case loginString + PENDING:
            return { ...prevState, err: null, isLoading: true }

        case loginString + FULFILLED:
            return { ...prevState, isLoading: false, userInfo: action.payload.data.data }

        case loginString + REJECTED:
            return { ...prevState, err: action.payload, isLoading: false }
            
        default:
            return prevState;
    }
}

export default loginReducer