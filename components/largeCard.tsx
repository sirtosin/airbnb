import Image from "next/image";
import React from "react";

type Card = {
  img: string;
  title: string;
  desc: string;
  buttonText: string;
};

function LargeCard({ img, title, desc, buttonText }: Card) {
    return (
      <section className="relative py-16 cursor-pointer">
        <div className="relative h-96 min-w-[300px]">
          <Image src={img} layout="fill" objectFit="cover" className="rounded-2xl"/>
        </div>
            <div className="absolute top-32 left-12 ">
                <h3 className="text-4xl mb-3 w-64">{title}</h3> 
                <p>{desc}</p>
                <button className="text-white bg-gray-900 px-4 py-2 mt-5 text-sm rounded">{buttonText}</button>
        </div>
      </section>
    );
}

export default LargeCard;
