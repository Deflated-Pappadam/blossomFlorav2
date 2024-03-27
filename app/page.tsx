"use client";
import Image from "next/image";
import NavBar from "./components/NavBar";
import Carousal from "./components/Carousal";
import { font_heading_bold, font_subHeading } from "./assets/fonts";
import ItemBox from "./components/ItemBox";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen flex-col items-center justify-between  bg-background">
      <NavBar />
      <section id="heroSection" className="flex h-fit max-h-[500px] w-full">
        <div className="flex w-full flex-col md:flex-row">
          <div className="md:order-0 order-1 m-auto flex h-full w-full flex-col items-center justify-center bg-accent  p-10 md:w-[50%]">
            <div className="flex flex-col justify-center text-2xl leading-none text-primary md:p-10 md:text-[3vw] ">
              SPECIALISTS IN THE CREATION, CURATION AND SUPPLY OF HIGH-QUALITY,
              STYLISH AND UNIQUE FLOWERS.
              <button className="my-5 h-fit w-fit bg-primary p-2 px-4 text-lg text-background">
                COLLECTIONS
              </button>
            </div>
          </div>
          <div className="order-0 m-auto h-[200px] w-full md:order-1 md:h-full md:w-[50%]">
            <Carousal />
          </div>
        </div>
      </section>

      <section
        id="collection"
        className="flex min-h-screen flex-col items-center justify-center"
      >
        <div className="flex flex-col items-center justify-center space-y-2">
          <h1
            className={`${font_heading_bold.className} text-center text-2xl font-bold md:text-4xl`}
          >
            Blossom Flora <br className="flex md:hidden" />
            Spring Bouquet Collection
          </h1>
          <a
            href="/collections"
            className={`${font_subHeading.className} cursor-pointer text-sm md:text-xl `}
          >
            VIEW ALL
          </a>
        </div>
        <div className="flex w-full flex-col items-center gap-5 space-y-5 p-5 md:flex-row md:space-y-0">
          <ItemBox
            id="1"
            name="Something"
            ImageUrl="/items/Item (1).jpg"
            price={10}
          />
          <ItemBox
            id="1"
            name="Something"
            ImageUrl="/items/Item (1).jpg"
            price={10}
          />
          <ItemBox
            id="1"
            name="Something"
            ImageUrl="/items/Item (1).jpg"
            price={10}
          />
          <ItemBox
            id="1"
            name="Something"
            ImageUrl="/items/Item (1).jpg"
            price={10}
          />
        </div>
      </section>
      <section id="newItem" className="flex md:flex-row flex-col h-full w-full md:w-[90%] justify-center items-center mx-auto">
        <div className="md:w-[60%] w-full p-10 md:order-0 order-1">
          <h2
            className={`${font_subHeading.className} text-md cursor-pointer  md:text-2xl `}
          >
            INTRODUCING:
          </h2>

          <h1
            className={`${font_heading_bold.className}  text-2xl font-bold md:text-4xl`}
          >
            THE BLOOM BOX
          </h1>
          <p
            className={`${font_subHeading.className} text-md cursor-pointer  py-5 md:text-2xl`}
          >
            With a variety of blooms to choose from, create your own custom
            arrangement or let us surprise you with our curated selection, all
            packed in a stylish box to make the perfect gift.
          </p>
          <button className="my-5 h-fit w-fit bg-primary p-2 px-4 text-lg text-background">
            ORDER HERE
          </button>
        </div>
        <div className="md:w-[60%] w-full md:order-1 order-0">
          <Image src="/items/Item (2).jpg" alt=""  width={1080} height={920} className="w-[500px]"/>
        </div>
      </section>
    </main>
  );
}
