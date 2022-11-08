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
import BookingTicket from '../pages/BookingTicket/BookingTicket'
import FilmsAdmin from '../pages/admin/filmsAdmin/FilmsAdmin'
import EditUser from '../pages/admin/usersAdmin/EditUser'
import UserInformation from '../pages/userInformation/UserInformation'

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
                {
                    path: 'ticketroom/:id',
                    element: <BookingTicket />
                },
                {
                    path: 'userinformation',
                    element: <UserInformation />
                },

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
                {
                    path: 'user/edituser/:id',
                    element: <EditUser />
                },
                // {
                //     path: 'films',
                //     element: <FilmsAdmin />
                // },
            ]
        }
    ])
    return routing
}

export default Routers