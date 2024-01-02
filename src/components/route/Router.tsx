import { FC, memo } from 'react';
import { Login } from '../pages/Login';
import { Home } from '../pages/Home';
import { Setting } from '../pages/Setting';
import { UserManagement } from '../pages/UserManagement';
import { createBrowserRouter } from 'react-router-dom';
import { routes } from './Routes';
import { Page404 } from '../pages/Page404';
import { HeaderLayout } from '../template/HeaderLayout';


export const router = createBrowserRouter([
    {
        path: "/",
        element: <HeaderLayout><Home /></HeaderLayout>,
        errorElement: <Page404 />
    },
    {
        path: "home",
        element: <HeaderLayout><Home /></HeaderLayout>,
        children: [
            {
                path: "usermanagement",
                element: <UserManagement />
            }
        ]
    },
    {
        path: "/settings",
        element: <Setting />
    },

])