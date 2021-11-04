import React from "react";

interface CardProps {
  number: number;
  bidder: any;
}

const Card = ({ number, bidder }: CardProps) => {
  return (
    <div className="border-t w-1/2 border-nouns-yellow border-r border-opacity-20 xs:px-2 xs:pl-6 sm:px-16 py-8 card">
      <h2 className="text-nouns xs:text-3xl sm:text-5xl xs:mb-4 sm:mb-10">
        Noun {number} POAP
      </h2>
      <div className="text-xs leading-loose opacity-75 font-bold text-dm">
        {bidder && bidder.map((a) => <p> {a.address}</p>)}
      </div>
    </div>
  );
};

export default Card;
