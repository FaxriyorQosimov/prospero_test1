
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade"
import "swiper/css/navigation"
import "swiper/css/pagination"



// import Swiper core and required modules
import SwiperCore, {
  EffectFade,Navigation,Pagination
} from 'swiper';

// install Swiper modules
SwiperCore.use([EffectFade,Navigation,Pagination]);


export default function BySwiper() {
  
  
  
  return (
    <>
        <Swiper style={{height: '500px', zIndex: '0', width: '100%', borderTopLeftRadius: '10px'}} spaceBetween={30} effect={'fade'} pagination={{"clickable": true}} className="mySwiper">
            <SwiperSlide><img style={{width: '100%', borderTopRightRadius: '10px', borderTopLeftRadius: '10px'}} src="https://swiperjs.com/demos/images/nature-1.jpg" /></SwiperSlide>
            <SwiperSlide><img style={{width: '100%', borderTopRightRadius: '10px', borderTopLeftRadius: '10px'}} src="https://swiperjs.com/demos/images/nature-2.jpg" /></SwiperSlide>
            <SwiperSlide><img style={{width: '100%', borderTopRightRadius: '10px', borderTopLeftRadius: '10px'}} src="https://swiperjs.com/demos/images/nature-3.jpg" /></SwiperSlide>
            <SwiperSlide><img style={{width: '100%', borderTopRightRadius: '10px', borderTopLeftRadius: '10px'}} src="https://swiperjs.com/demos/images/nature-4.jpg" /></SwiperSlide>
        </Swiper>
    </>
  )
}