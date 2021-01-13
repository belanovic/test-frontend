import React, {useState, useEffect} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Thumbs, Autoplay} from 'swiper';
import 'swiper/swiper-bundle.css'

SwiperCore.use([Navigation, Pagination, Thumbs, Autoplay])

export default function BootstrapCarousel() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  
    return (
          <>
          <Swiper  
            id = "main" 
            autoplay = {{
            delay: '3000'
            }}
            loop = {true} 
            tag = 'section'
            grabCursor = {true} 
            wrapperTag = 'ul' 
            navigation
            thumbs = {{swiper: thumbsSwiper}}>
              <SwiperSlide tag = 'li'><img src = '/images/img0.jpg' className = "imgSlide"></img></SwiperSlide>
              <SwiperSlide tag = 'li'><img src = '/images/img1.jpg' className = "imgSlide"></img></SwiperSlide>
              <SwiperSlide tag = 'li'><img src = '/images/img2.jpg' className = "imgSlide"></img></SwiperSlide>
              <SwiperSlide tag = 'li'><img src = '/images/img3.jpg' className = "imgSlide"></img></SwiperSlide>
              <SwiperSlide tag = 'li'><img src = '/images/img5.jpg' className = "imgSlide"></img></SwiperSlide>
          </Swiper>
          
          <Swiper 
            id = "thumbs" 
            onSwiper = {setThumbsSwiper}
            slidesPerView = {5} 
            spaceBetween = {1}>
              <SwiperSlide tag = 'li'><img src = '/images/img0.jpg' className = "imgThumb"></img></SwiperSlide>
              <SwiperSlide tag = 'li'><img src = '/images/img1.jpg' className = "imgThumb"></img></SwiperSlide>
              <SwiperSlide tag = 'li'><img src = '/images/img2.jpg' className = "imgThumb"></img></SwiperSlide>
              <SwiperSlide tag = 'li'><img src = '/images/img3.jpg' className = "imgThumb"></img></SwiperSlide>
              <SwiperSlide tag = 'li'><img src = '/images/img5.jpg' className = "imgThumb"></img></SwiperSlide>
          </Swiper>
          </>
        )
}