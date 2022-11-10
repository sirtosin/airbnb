import Image from "next/image";
import React from "react";
type Card = {
  img: string;
  title: string;
};
type Props = {
  card: Card;
};

function MediumCard({ card }: Props) {
    return (
      <div className="cursor-pointer hover:scale-105 transition transform  duration-300 ease-out">
        <div className="relative h-80 w-80 ">
          <Image src={card.img} layout="fill" className="rounded-xl" />
        </div>
        <h3 className="text-2xl mt-3">{card.title}</h3>
      </div>
    );
}

export default MediumCard;
