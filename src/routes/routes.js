// routes
import { Navigate, useRoutes } from 'react-router-dom';
// pages
import User from '../pages/User';
import Login from '../pages/Login';
import Home from '../pages/Home';

export default function Routes() {
    return useRoutes([
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/user',
        element:  <User /> 
      },
      {
        path: '/',
        element: <Login />,
      },
      // { path: '*', element: <Navigate to="/404" replace /> }
    ]);
}
