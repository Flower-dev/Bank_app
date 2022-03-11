// routes
import { useRoutes } from 'react-router-dom';
// pages
import Home from '../pages/Home';
import User from '../pages/User';
import Login from '../pages/Login';

export default function Routes() {
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
        element: <Login />,
      }
    ]);
}
