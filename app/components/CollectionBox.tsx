import Image from "next/image";
import React from "react";

type CollectionProps = {
  url: string;
  name: string;
};

function CollectionsBox(props: CollectionProps) {
  return (
    <div>
      <div className="group relative flex h-[150px]  w-[150px]  overflow-hidden md:h-[300px] md:min-h-[300px] md:w-[300px]  rounded-md">
        <Image
          width={1080}
          height={1080}
          src={props.url}
          alt=""
          className="hover: absolute top-0 h-full w-full  object-cover  transition-all delay-100 duration-1000 group-hover:scale-[105%] group-hover:blur-[4px] blu"
        />
        <div className="z-1 absolute top-0  flex  h-[150px] w-[150px] items-center justify-center overflow-hidden md:h-[300px] md:min-h-[300px] md:w-[300px] ">
          <h1 className={`mx-auto w-[90%] text-center text-[2vw] text-white`}>
            {props.name}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default CollectionsBox;
