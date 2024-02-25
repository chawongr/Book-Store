import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = ({authen}) => {
    return (
        authen ?
            <Outlet />
            :
            <Navigate to= {"/"} />
    )
}
export default PrivateRoute
