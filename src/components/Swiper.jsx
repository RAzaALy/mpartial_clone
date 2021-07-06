import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

import "./Swiper.css";

import SwiperCore, {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper/core";

SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

export default function App() {
  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
        }}
        cssMode={true}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="./images/slide1.jpeg" alt="slide1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/slide2.jpeg" alt="slide2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/slide3.jpeg" alt="slide3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/slide4.jpeg" alt="slide4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/slide1.jpeg" alt="slide1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/slide2.jpeg" alt="slide2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/slide4.jpeg" alt="slide4" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
