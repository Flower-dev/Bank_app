import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import LogoOnlyLayout from '../layouts/LogoOnlyLayout';
// 
import User from '../pages/User';
import NotFound from '../pages/Page404';
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
        element: <LogoOnlyLayout />,
        children: [
          { path: 'login', element: <Login /> },
          { path: '404', element: <NotFound /> },
          { path: '*', element: <Navigate to="/404" /> }
        ]
      },
      { path: '*', element: <Navigate to="/404" replace /> }
    ]);
}
