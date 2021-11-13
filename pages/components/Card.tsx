import React from "react";

interface CardProps {
  number: number;
  bidder: any;
}

const Card = ({ number, bidder }: CardProps) => {
  return (
    <div className="border-b xs:w-full sm:w-1/2 border-nouns-yellow sm:border-r border-opacity-20 xs:px-2 xs:pl-6 sm:px-16 py-8 card">
      <div className="relative card-group">
        <a
          href={`https://nouns.wtf/auction/${number}`}
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="sm:absolute m-auto h-52 z-10 card-image sm:cursor-pointer"
            src="./poap96.png"
            alt="poap"
          />
        </a>
        <div className="text-nouns xs:text-5xl xs:text-center xs:pt-6 sm:pt-0 sm:text-left sm:text-5xl xs:mb-4 sm:mb-10 card-title w-full">
          Noun {number} POAP
        </div>
      </div>

      <div className="text-sm xs:leading-8 sm:leading-loose opacity-75 font-normal text-dm">
        {bidder && bidder.map((a) => <p> {a.address}</p>)}
      </div>
    </div>
  );
};

export default Card;
