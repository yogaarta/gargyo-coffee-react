import React from 'react'
// import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function PrivateNotLoggedIn({
  children,
  allowedRole,
  redirectedTo = "/",
  isRouteReplaced = true,
  extraData = null,
}) {
  const isLoggedIn = useSelector((state)=>state.auth.isLoggedIn)
  if (!isLoggedIn) {
    return (
      <Navigate to={redirectedTo} replace={isRouteReplaced} state={extraData} />
    )
  }
  return children
}

// const mapStateToProps = (reduxState) => {
//   const { auth: { isLoggedIn, userInfo } } = reduxState
//   return { isLoggedIn, userInfo }
// }

export default PrivateNotLoggedIn