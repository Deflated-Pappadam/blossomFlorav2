"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { font_logo } from "../assets/fonts";

export default function NavBar() {
  const [dropDown, setDropDown] = useState(false);

  const toggleDropdown = () => {
    setDropDown(true);
  };

  return (
    <nav className="flex flex-col w-full h-full px-2 overflow-x-hidden">
      <div
        className={`md:flex hidden items-center justify-center w-full md:w-[90%] bg-[#2d2d2d] text-white md:text-xl text-sm  text-center rounded-b-lg p-2 mx-auto `}
      >
        Home delivery available only for nearby locations , please order within
        a two days notice
      </div>
      {/* Logo or Menu */}
      <div
        className={`w-full md:w-[80%] flex justify-between items-center mx-auto p-2 `}
      >
        <Image
          src="/logo.png"
          alt="Logo"
          width={130}
          height={130}
          className={`md:flex hidden justify-center items-center pt-5`}
        />
        <button onClick={toggleDropdown}>
          <Image
            src="/menu.png"
            alt="Logo"
            width={30}
            height={30}
            className={`flex md:hidden justify-center items-center pt-5`}
          />
        </button>

        {/* Main Logo */}
        <div
          className={`flex flex-col justify-center items-center ${font_logo.className} text-primary text-center text-xl md:text-6xl md:-mt-[15px]`}
        >
          <div className=" md:text-3xl text-md">The </div>Blossom Flora
        </div>

        {/* Profile Cart */}
        <div className="flex  justify-center items-center gap-4">
          <Image src="/profile.png" alt="" width={40} height={40} />
          <Image src="/cart.png" alt="" width={40} height={40} />
        </div>
      </div>

      {/* nav desktop */}
      <div className="w-full hidden md:flex  text-xl font-extralight items-center text-center justify-center gap-8  p-5">
        <Link
          href="/"
          className="group relative inline-block hover:cursor-pointer"
        >
          <span className="text-black py-2">HOME</span>
          <span className="absolute top-8 left-0 group-hover:w-full w-0 h-[2px] transition-all bg-black duration-300"></span>
        </Link>
        <Link
          href="/#aboutUs"
          className="group relative inline-block hover:cursor-pointer"
        >
          <span className="text-black py-2">ABOUT</span>
          <span className="absolute top-8 left-0 group-hover:w-full w-0 h-[2px] transition-all bg-black duration-300"></span>
        </Link>
        <Link
          href="/Collections"
          className="group relative inline-block hover:cursor-pointer"
        >
          <span className="text-black py-2">SHOP</span>
          <span className="absolute top-8 left-0 group-hover:w-full w-0 h-[2px] transition-all bg-black duration-300"></span>
        </Link>
        <Link
          href="/#collectionSection"
          className="group relative inline-block hover:cursor-pointer"
        >
          <span className="text-black py-2">COLLECTION</span>
          <span className="absolute top-8 left-0 group-hover:w-full w-0 h-[2px] transition-all bg-black duration-300"></span>
        </Link>
        <Link
          href="/"
          className="group relative inline-block hover:cursor-pointer"
        >
          <span className="text-black py-2">CONTACT US</span>
          <span className="absolute top-8 left-0 group-hover:w-full w-0 h-[2px] transition-all bg-black "></span>
        </Link>
      </div>
{/* nav mobile */}
      <div
        className={`flex flex-col justify-center  items-start w-full max-h-[${
          dropDown ? "150px" : "0px"
        }]  bg-blue overflow-hidden ${
            dropDown ? "flex" : "hidden"
          }] `}
      >{dropDown} .</div>
    </nav>
  );
}
