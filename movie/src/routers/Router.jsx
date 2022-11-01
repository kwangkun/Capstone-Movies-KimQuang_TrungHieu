import React from 'react'
import { useRoutes } from 'react-router-dom'
import MainLayout from '../components/layouts/MainLayout'
import Detail from '../pages/detail/Detail'
import Home from '../pages/home/Home'

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
                    path: 'detail',
                    element: <Detail />
                },
            ]
        }
    ])
    return routing
}

export default Routers