"use client";
import Image from "next/image";
import NavBar from "./components/NavBar";
import Carousal from "./components/Carousal";
import { font_heading_bold, font_subHeading } from "./assets/fonts";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-background  mx-auto">
      <NavBar />
      <section id="heroSection" className="flex w-full max-h-[500px]">
        <div className="w-[50%] h-[500px] bg-accent p-5  ">
          <div className="flex flex-col md:text-[3.5rem] text-2xl leading-none justify-center text-primary p-10 ">
            SPECIALISTS IN THE CREATION, CURATION AND SUPPLY OF HIGH-QUALITY,
            STYLISH AND UNIQUE FLOWERS.
            <button className="w-fit h-fit bg-primary text-lg text-background px-4 p-2 my-5">
              COLLECTIONS
            </button>
          </div>
        </div>
        <div className="w-[50%] h-full">
          <Carousal />
        </div>
      </section>

      <section
        id="latestCollection"
        className="flex flex-col justify-center items-center min-h-screen"
      >
        <div className="flex flex-col space-y-2 justify-center items-center">
          <h1 className={`${font_heading_bold.className} text-3xl`}>
            Blossom Flora Spring Bouquet Collection
          </h1>
          <h2 className={`${font_subHeading.className} text-xl`}>VIEW ALL</h2>
        </div>
      </section>
    </main>
  );
}
