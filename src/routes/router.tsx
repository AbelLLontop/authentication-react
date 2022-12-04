// import App from '@/App';
// import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Products from '@/pages/Products';
import PrivateRoutes from '@/utils/PrivateRoutes';
import { lazy, Suspense } from 'react';
import {createBrowserRouter} from 'react-router-dom';

const HomePage = lazy(()=>import('@/pages/Home'));

export default createBrowserRouter([{
    element: <PrivateRoutes />,
    children: [
        {
            path: '/',
            element: <Suspense fallback={<div>Loading...</div>}><HomePage /></Suspense>,
        },
        {
            path :'/products',
            element: <Products />
        }
    ]
},
{
    path: '/login',
    element: <Login/>
}])
;

