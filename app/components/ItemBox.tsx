import Image from "next/image";
import React from "react";

type ItemProps = {
  ImageUrl: string;
  name: string;
  price: number;
  id: string;
};

function ItemBox({ ImageUrl, name, price, id }: ItemProps) {
  return (
    <div className="group relative w-[300px] shrink-0 rounded-lg bg-white p-5 drop-shadow-md transition-all hover:drop-shadow-xl md:h-[500px] md:w-[300px]">
      <div className="pathway-extreme min-h-[100px] p-1 py-5 text-2xl">{name}</div>

      <Image
        src={ImageUrl}
        alt=""
        height={1080}
        width={1080}
        className="h-[250px] w-[300px] items-center  object-contain md:min-h-[300px]  "
      />
      <div className="flex w-full justify-between p-2 py-5">
        <div className=" poppins-light text-xl">Price </div>
        <div>$ {price}/piece</div>
      </div>
    </div>
  );
}

export default ItemBox;
