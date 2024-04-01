"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { font_logo } from "../assets/fonts";

export default function NavBar() {
  const [dropDown, setDropDown] = useState(false);

  const toggleDropdown = () => {
    setDropDown(!dropDown);
  };

  return (
    <nav className="flex h-full w-full flex-col overflow-x-hidden px-2">
      <div
        className={`mx-auto hidden w-full items-center justify-center rounded-b-lg bg-[#2d2d2d] p-2 text-center text-sm  text-white md:flex md:w-[90%] md:text-xl `}
      >
        Home delivery available only for nearby locations , please order within a two days
        notice
      </div>
      {/* Logo or Menu */}
      <div
        className={`mx-auto flex  w-full items-center justify-between p-2 md:w-[80%] `}
      >
        <div className="flex md:min-w-[200px]">
          <Image
            src="/logo.png"
            alt="Logo"
            width={125}
            height={125}
            className={`hidden items-center justify-center pt-5 md:flex`}
          />
          <button onClick={toggleDropdown}>
            <Image
              src="/menu.png"
              alt="Logo"
              width={30}
              height={30}
              className={`flex items-center justify-center pt-5 md:hidden`}
            />
          </button>
        </div>

        {/* Main Logo */}
        <div
          className={`flex flex-col items-center justify-center  ${font_logo.className} text-center text-xl text-primary md:-mt-[15px] md:text-5xl `}
        >
          <div className=" text-md md:text-2xl">The </div>Blossom Flora
        </div>

        {/* Profile & Cart */}
        <div className="flex  items-center justify-center gap-4 md:min-w-[200px]">
          <Image src="/profile.png" alt="" width={40} height={40} />
          <Image src="/cart.png" alt="" width={40} height={40} />
        </div>
      </div>

      {/* nav desktop */}
      <div className="mx-auto hidden w-fit  items-center justify-center gap-8 pb-5 text-center text-xl font-extralight md:flex">
        <Link href="/" className="group relative inline-block hover:cursor-pointer">
          <span className="py-2 text-black">HOME</span>
          <span className="absolute left-0 top-8 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link
          href="/#aboutUs"
          className="group relative inline-block hover:cursor-pointer"
        >
          <span className="py-2 text-black">ABOUT</span>
          <span className="absolute left-0 top-8 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link
          href="/Collections"
          className="group relative inline-block hover:cursor-pointer"
        >
          <span className="py-2 text-black">SHOP</span>
          <span className="absolute left-0 top-8 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link
          href="/#collectionSection"
          className="group relative inline-block hover:cursor-pointer"
        >
          <span className="py-2 text-black">COLLECTION</span>
          <span className="absolute left-0 top-8 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link href="/" className="group relative inline-block hover:cursor-pointer">
          <span className="py-2 text-black">CONTACT US</span>
          <span className="absolute left-0 top-8 h-[2px] w-0 bg-black transition-all group-hover:w-full "></span>
        </Link>
      </div>

      {/* 
      nav mobile 
      needs work 
      */}
      <div
        className={` w-full flex-col  items-start justify-center  overflow-hidden bg-blue ${!dropDown ? "h-[0px]" : "h-[200px]"} `}
      >
        {dropDown} .
      </div>
    </nav>
  );
}
