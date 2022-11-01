import React from 'react'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
    return (
        <div>
            <main className='main-outlet'>
                <Outlet />
            </main>
        </div>
    )
}

export default MainLayout