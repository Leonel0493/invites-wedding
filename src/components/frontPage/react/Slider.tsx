import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

interface SliderProps {
  slides: string[];
}

const Slider: React.FC<SliderProps> = ({ slides }) => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      className="w-full h-full"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <img src={slide} alt={`slide-${index}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
