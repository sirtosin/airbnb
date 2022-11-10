import Image from "next/image";
import React from "react";

type Props = {};

function Banner({}: Props) {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="https://links.papareact.com/0fm"
        layout="fill"
        objectFit="cover"
        alt="btn"
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm capitalize sm:text-lg">
          not sure where to go? perfect.
        </p>
        <button className="font-bold my-3 bg-white text-purple-500 py-4 px-10 rounded-full shadow-md hover:shadow-xl active:scale-90 transition duration-150 ease-out ">
          I am flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;
