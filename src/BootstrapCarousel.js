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
              <SwiperSlide tag = 'li'><img src = 'https://bit.ly/3oAxqW2' className = "imgSlide"></img></SwiperSlide>
              <SwiperSlide tag = 'li'><img src = 'https://bit.ly/3sh2v3k' className = "imgSlide"></img></SwiperSlide>
              <SwiperSlide tag = 'li'><img src = 'https://bit.ly/3oDK6vu' className = "imgSlide"></img></SwiperSlide>
              <SwiperSlide tag = 'li'><img src = 'https://bit.ly/39pVLHU' className = "imgSlide"></img></SwiperSlide>
              <SwiperSlide tag = 'li'><img src = 'https://bit.ly/2LLLUnk' className = "imgSlide"></img></SwiperSlide>
          </Swiper>
          
          <Swiper 
            id = "thumbs" 
            onSwiper = {setThumbsSwiper}
            slidesPerView = {5} 
            spaceBetween = {1}>
              <SwiperSlide tag = 'li'><img src = 'https://bit.ly/3oAxqW2' className = "imgThumb"></img></SwiperSlide>
              <SwiperSlide tag = 'li'><img src = 'https://bit.ly/3sh2v3k' className = "imgThumb"></img></SwiperSlide>
              <SwiperSlide tag = 'li'><img src = 'https://bit.ly/3oDK6vu' className = "imgThumb"></img></SwiperSlide>
              <SwiperSlide tag = 'li'><img src = 'https://bit.ly/39pVLHU' className = "imgThumb"></img></SwiperSlide>
              <SwiperSlide tag = 'li'><img src = 'https://bit.ly/2LLLUnk' className = "imgThumb"></img></SwiperSlide>
          </Swiper>
          </>
        )
}