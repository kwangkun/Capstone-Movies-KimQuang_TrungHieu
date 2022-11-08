import React from 'react'
import { useRoutes } from 'react-router-dom'
import MainLayout from '../components/layouts/MainLayout'
import Contact from '../pages/contact/Contact'
import Detail from '../pages/detail/Detail'
import Home from '../pages/home/Home'
import Login from '../pages/login/Login'
import News from '../pages/news/News'
import Register from '../pages/register/Register'

const Routers = () => {
    const routing = useRoutes([
        {
            path: '/',
            element: <MainLayout />,
            children: [
                {
                    path: 'home',
                    element: <Home />
                },
                {
                    path: 'detail/:id',
                    element: <Detail />
                },
                {
                    path: 'login',
                    element: <Login />
                },
                {
                    path: 'register',
                    element: <Register />
                },
                {
                    path: 'contact',
                    element: <Contact />

                },
                {
                    path: 'news',
                    element: <News />
                },

            ]
        }
    ])
    return routing
}

export default Routers