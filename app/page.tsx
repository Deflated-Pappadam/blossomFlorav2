"use client";
import Image from "next/image";
import NavBar from "./components/NavBar";
import { Splide, SplideSlide } from "@splidejs/react-splide";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-background">
      <NavBar />
      <section id="heroSection" className="flex w-full ">
        <div className="w-[50%] h-full bg-accent p-5 ">
          <div className="flex flex-col md:text-[3.5rem] text-2xl  leading-none justify-center ">
            SPECIALISTS IN THE CREATION, CURATION AND SUPPLY OF HIGH-QUALITY,
            STYLISH AND UNIQUE FLOWERS.
            <button className="w-fit h-fit bg-primary text-lg text-background px-4 p-2 my-5">
              COLLECTIONS
            </button>
          </div>
        </div>
        <div className="w-[50%] h-full">

        </div>
      </section>

      {/* <section id="hero" className="flex flex-col w-full ">
        <div className="w-full flex md:flex-row flex-col md:max-h-[80vh] overflow-hidden">
          <div className="flex justify-end  items-center md:w-[50%] bg-[#ebf1fa] md:order-0 order-1 p-10">
            <div className="flex flex-col md:text-[3.5rem] text-2xl poppins-regular leading-none pt-10">
              SPECIALISTS IN THE CREATION, CURATION AND SUPPLY OF HIGH-QUALITY,
              STYLISH AND UNIQUE FLOWERS.
              <button className="w-fit h-fit px-4 p-2 bg-[#2d2d2d] text-lg text-white my-5 ">
                COLLECTIONS
              </button>
            </div>
          </div>
          <div className="md:max-w-[50%] overflow-hidden md:order-1 order-0 md:h-full w-full ">
            <div className="w-full h-full">
              <Splide
                options={{
                  type: "fade",
                  rewind: true,
                  autoplay: true,
                  interval: 2000,
                  arrows: false,
                  lazyLoad: true,
                  speed: 1000,
                  rewindSpeed: 1000,
                }}
              >
                <SplideSlide>
                  <div className="md:max-h-[70vh] max-h-[50vh]">
                    <Image
                      src="/items/I (3).jpg"
                      alt="Logo"
                      width={1080}
                      height={1080}
                      className=" object-fit   "
                    />
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div className="md:max-h-[70vh] max-h-[50vh]">
                    <Image
                      src="/items/I (4).jpg"
                      alt="Logo"
                      width={1080}
                      height={1080}
                      className=" object-fit   "
                    />
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div className="md:max-h-[70vh] max-h-[50vh] ">
                    <Image
                      src="/items/I (6).jpg"
                      alt="Logo"
                      width={1080}
                      height={1080}
                      className=" object-fit   "
                    />
                  </div>
                </SplideSlide>
              </Splide>
            </div>
          </div>
        </div>
      </section> */}
      <section className="min-h-screen"></section>
    </main>
  );
}
