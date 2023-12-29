"use client";
import React from "react";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";
import { partners } from "../assets/data";

export default function PartnerSlider() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        modules={[Navigation, Autoplay]}
        className="px-5 my-16"
      >
        {partners.map((part, i) => (
          <SwiperSlide className="flex justify-center items-center" key={i}>
            <Image src={part} alt={`partner${i}`} className="w-5/6" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
