import { FULFILLED, loginString, logoutString, PENDING, REJECTED } from "../actionCreator/actionString";

const initialState = {
    userInfo: null,
    isLoading: false,
    err: null,
    isSuccess: null,
    isLoggedIn: false
}

const loginReducer = (prevState = initialState, action) => {
    switch (action.type) {
        case loginString + PENDING:
            return { ...prevState, err: null, isLoading: true }

        case loginString + FULFILLED:
            return { ...prevState, isLoading: false, userInfo: action.payload.data.data, isSuccess: true, isLoggedIn: true }

        case loginString + REJECTED:
            return { ...prevState, err: action.payload.response.data, isLoading: false, isSuccess: false }
        
        case logoutString:
            return { ...initialState }
            
        default:
            return prevState;
    }
}

export default loginReducer