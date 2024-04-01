import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";

function Carousal() {
  const images: string[] = ["Item (1).jpg", "Item (2).jpg", "Item (3).jpg"];

  return (
    <div className="h-full w-full">
      <Swiper
        autoplay={true}
        loop={true}
        className="h-full w-full "
        modules={[Autoplay, Pagination]}
      >
        {images.map((src, index) => (
          <SwiperSlide className="h-full w-full" key={index}>
            <Image
              alt=""
              src={`/items/${src}`}
              width={1080}
              height={1080}
              className="object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousal;
