import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

function PrivateLoggedIn({
    children,
    allowedRole,
    redirectedTo = "/",
    isRouteReplaced = true,
    extraData = null,
    props
}) {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
    if (isLoggedIn) {
        return (
            <Navigate to={redirectedTo} replace={isRouteReplaced} state={extraData} />
        )
    }
    // if(allowedRole !== "admin"){
    //   return (
    //     <Navigate to={redirectedTo} replace={isRouteReplaced} state={extraData} />
    //   )
    // }
    return children
}

// const mapStateToProps = (reduxState) => {
//     const { auth: { userInfo } } = reduxState
//     return { userInfo }
// }

export default PrivateLoggedIn