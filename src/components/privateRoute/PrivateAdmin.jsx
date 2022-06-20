import React from 'react'
// import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function PrivateAdmin({
  children,
  allowedRole,
  redirectedTo = "/",
  isRouteReplaced = true,
  extraData = null,
}) {
  const roles = useSelector((state)=>state.userData.data.roles)
  if (roles !== "admin") {
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

export default PrivateAdmin