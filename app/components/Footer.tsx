import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { font_heading_bold, font_logo, font_subHeading } from "../assets/fonts";

function Footer() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="flex h-[200px] w-full flex-col items-center justify-center rounded-t-xl bg-primary p-10 text-background md:h-[400px]">
      <h1 className={`${font_logo.className} text-center text-7xl text-white`}>
        The Blossom Flora
      </h1>
      <h2
        className={`${font_heading_bold.className} p-5 text-center text-2xl font-bold md:text-3xl`}
      >
        {" "}
        Our Phone : +91 7947146568
      </h2>
      <h3
        className={`${font_subHeading.className} cursor-pointer pb-5 text-sm md:text-xl`}
      >
        Address : Town Hall, Kizhakkupuram, Attingal, Thiruvananthapuram - 695101{" "}
      </h3>
      <a
        href="https://wa.me/+917947146568"
        className="w-fit rounded-full bg-background px-4 py-2 text-xl font-medium text-primary transition-all hover:scale-[105%]"
      >
        Send a Message
      </a>
    </div>
  );
}

export default Footer;
