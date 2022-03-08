import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
import HomeLayout from './layouts/index.js';
// 
import User from './pages/User';
import NotFound from './pages/Page404';
import Login from './pages/Login';
import Home from './pages/Home';

export default function Routes() {
    return useRoutes([
      {
        path: '/home',
        element: <HomeLayout />,
        children: [
          { element: <Navigate to="/home/app" replace /> },
          { path: 'app', element: <Home /> },
          { path: 'user', element: <User /> },
          
        ]
      },
      {
        path: '/',
        element: <LogoOnlyLayout />,
        children: [
          { path: 'login', element: <Login /> },
        
          { path: '404', element: <NotFound /> },
          { path: '/', element: <Navigate to="/dashboard" /> },
          { path: '*', element: <Navigate to="/404" /> }
        ]
      },
      { path: '*', element: <Navigate to="/404" replace /> }
    ]);
}
