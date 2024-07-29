import { Navigate } from 'react-router-dom';
import Layout from '../pages/layout';
import Login from '../pages/login';
import Home from '../pages/home';
import About from '../pages/about';

const NotFound = () => <h1>404</h1>

const routes = [
    {
        path: 'login',
        element: <Login></Login>
    },
    {
        element: <Layout></Layout>,
        children: [
            {
                path: 'home',
                element: <Home></Home>
            },
            {
                path: 'about',
                element: <About></About>
            }
        ]
    },
    {
        path: '',
        element: <Navigate to="/home"></Navigate>
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
]

export default routes;