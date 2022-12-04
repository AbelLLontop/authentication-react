import React, { FC, ReactElement } from 'react'
import { Navigate ,Outlet,useOutletContext} from 'react-router-dom';

interface Props{
    redirectTo?:string;
    children?:any;
    permission?:string;
}

const ProtectedRoute:FC<Props> = ({redirectTo="/landing",children,permission}) => {
    const user = useOutletContext() as any;
    const existPermission = user?.permissions?.includes(permission);
    if(!user){
        return <Navigate to={redirectTo} replace  />
    }

    if(permission && !existPermission){
        return <Navigate to={redirectTo} replace  />
    }
    
    return children?children:<Outlet/>
}



export default ProtectedRoute