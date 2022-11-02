import React from 'react'
import HomeFooter from '../../components/molecules/HomeFooter'
import HomeHeader from '../../components/molecules/HomeHeader'
import HomeCarousel from './HomeCarousel'
import HomeMenu from './HomeMenu'

const Home = () => {
    return (
        <div>
            <HomeCarousel />
            <HomeMenu />
            <HomeFooter />
        </div>
    )
}

export default Home