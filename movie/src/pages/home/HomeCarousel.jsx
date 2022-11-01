import React from 'react'
import { useSelector } from 'react-redux'

const HomeCarousel = () => {
    const { bannerCarousel } = useSelector(state => state.HomeCarouselReducer)
    console.log(bannerCarousel)
    const contentStyle = {
        height: '690px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    };
    return (
        <div><div className='w-full'>
            <Carousel effect="fade">
                {bannerList.map((item) => {
                    return <div key={item.maBanner}>
                        <div style={{ ...contentStyle, backgroundImage: `url(${item.hinhAnh})` }} >
                            <img className='w-full opacity-0' src={item.hinhAnh} alt={item.maPhim} />
                        </div>
                    </div>
                })}
            </Carousel>
        </div></div>
    )
}

export default HomeCarousel