import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Login from "../../pages/Login/Login";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
               path: '/login',
               element: <Login></Login> 
            },
            {
                path: '/register',
                element: <Login></Login> 
             }
        ]
    }
])