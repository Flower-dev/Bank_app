// routes
import { useRoutes } from 'react-router-dom';
// guards
// import AuthGuard from '../guards/AuthGuard';
import GuestGuard from '../guards/GuestGuard';
// 
// pages
import Home from '../pages/Home';
import User from '../pages/User';
import Login from '../pages/Login';

// ----------------------------------------------------------------------


export default function Router() {
    return useRoutes([
        {
            path: '/',
            element: <Home />,
        },
        {
            path: '/user',
            element:  <User /> 
        },
        {
            path: '/login',
            element: (
            <GuestGuard>
                <Login />
            </GuestGuard>
            ),
        }
    ])

}