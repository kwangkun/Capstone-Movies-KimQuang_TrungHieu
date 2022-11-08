import React from 'react'
import { useRoutes } from 'react-router-dom'
import AdminLayout from '../components/layouts/AdminLayout'
import MainLayout from '../components/layouts/MainLayout'
import UsersAdmin from '../pages/admin/usersAdmin/UsersAdmin'
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
                }
            ]
        },
        {
            path: 'admin',
            element: <AdminLayout />,
            children: [
                {
                    path: 'users',
                    element: <UsersAdmin />
                },
                
            ]
        }
    ])
    return routing
}

export default Routers