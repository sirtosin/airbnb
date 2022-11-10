import Image from 'next/image';
import React from 'react'

type Explore = {
  img: string;
  location: string;
  distance: string;
};
type Props = {
  explore:Explore
};

function SmallCard({ explore }: Props) {
    return (
      <div className='flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out'>
        <div className="relative w-16 h-16 ">
          <Image src={explore.img} layout="fill" className="rounded-lg" />
            </div>
            <div>
                <h2>
                    {explore.location}
                </h2>
                <h3 className='text-gray-500'>
                    {explore.distance}
                </h3>
            </div>
      </div>
    );
}

export default SmallCard
