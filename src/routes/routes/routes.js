import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import CourseDetails from "../../pages/CourseDetails/CourseDetails";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader: () => fetch('http://localhost:5000/categories'),
                element: <Home></Home> 
            },
            {
                path: '/course/:id',
                loader: ({params}) => fetch(`http://localhost:5000/courses/${params.id}`),
                element: <CourseDetails></CourseDetails>
             },
            {
               path: '/login',
               element: <Login></Login> 
            },
            {
                path: '/register',
                element: <Register></Register> 
            },
        ]
    }
])