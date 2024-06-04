"use client";

import Image from "next/image";

// import type { Swiper as SwiperObject } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./slideshow.css";

interface Props {
  images: string[];
  title: string;
  className?: string;
}

export const ProductMobileSlideShow = ({ images, title, className }: Props) => {
  const styleSlide = {
    "--swiper-navigation-color": "#000",
    "--swiper-pagination-color": "#000",
    width: "auto",
    height: "500px",
  } as React.CSSProperties;
  return (
    <div className={className}>
      <Swiper
        pagination
        slidesPerView={1}
        modules={[FreeMode, Pagination]}
        onSwiper={(swiper) => console.log(swiper)}
        style={styleSlide}
      >
        {images.map((image) => (
          <SwiperSlide key={image}>
            <Image
              priority
              width={600}
              height={500}
              src={`/products/${image}`}
              alt={title}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
