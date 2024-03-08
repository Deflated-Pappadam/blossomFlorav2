"use client";
import Image from "next/image";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-background">
      <NavBar />
      <section id="heroSection" className="flex w-full ">
        <div className="w-[50%] h-full bg-accent p-5  ">
          <div className="flex flex-col md:text-[3.5rem] text-2xl leading-none justify-center text-primary">
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

      
      <section className="min-h-screen"></section>
    </main>
  );
}
