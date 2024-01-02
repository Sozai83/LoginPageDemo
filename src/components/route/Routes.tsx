import { FC, memo } from 'react';
import { Login } from '../pages/Login';
import { Home } from '../pages/Home';
import { Setting } from '../pages/Setting';
import { UserManagement } from '../pages/UserManagement';
import { Page404 } from '../pages/Page404';




export const routes = () => {
    return [
        {
            path: "/",
            element: <Home />,
            errorElement: <Page404 />,

        },
        {
            path: "/login",
            element: <Login />
        },
        {
            path: "/setting",
            element: <Setting />
        },
        {
            path: "/usermanagement",
            element: <UserManagement />
        },
        {
            path: "*",
            element: <Page404 />
        }
    ]

}