"use client";

import { useState } from "react";
import Image from "next/image";

import type { Swiper as SwiperObject } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./slideshow.css";

interface Props {
  images: string[];
  title: string;
  className?: string;
}

export const ProductSlideShow = ({ images, title, className }: Props) => {
  const [thumbSwiper, setThumbSwiper] = useState<SwiperObject>();
  return (
    <div className={className}>
      <Swiper
        loop
        navigation
        spaceBetween={10}
        slidesPerView={1}
        thumbs={{
          swiper: thumbSwiper,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        style={
          {
            "--swiper-navigation-color": "#000",
            "--swiper-pagination-color": "#000",
          } as React.CSSProperties
        }
      >
        {images.map((image) => (
          <SwiperSlide key={image}>
            <Image
              priority
              width={1024}
              height={800}
              src={`/products/${image}`}
              alt={title}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        loop={images.length > 4}
        onSwiper={setThumbSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
        style={{ backgroundColor: "#f2f2f2" }}
      >
        {images.map((image) => (
          <SwiperSlide key={image}>
            <Image
              priority
              width={200}
              height={200}
              src={`/products/${image}`}
              alt={title}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
