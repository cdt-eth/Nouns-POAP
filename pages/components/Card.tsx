import React from "react";

interface CardProps {
  number: number;
  bidder: any;
}

const Card = ({ number, bidder }: CardProps) => {
  console.log("askdjfa", number, bidder);
  return (
    <div className="sm:border-b xs:w-full sm:w-1/2 border-nouns-yellow sm:border-r border-opacity-20 xs:px-2 xs:pl-6 sm:px-16 py-8 card">
      <div className="sm:flex sm:flex-row-reverse">
        {/* <div className="card-group "> */}
        <div className="sm:w-1/2">
          <a
            href={`https://nouns.wtf/auction/${number}`}
            target="_blank"
            rel="noreferrer"
          >
            <img
              className=" m-auto h-52 z-10 card-image sm:cursor-pointer rounded-full"
              src={`./beings/n${number}.png`}
              alt={`poap${number}`}
            />
          </a>
        </div>
        <div className="text-nouns sm:w-1/2 xs:text-5xl  xs:pt-6 sm:pt-0  sm:text-5xl xs:mb-4 sm:mb-10 card-title w-full">
          Noun {number} POAP
          {/* </div> */}
          {/* </div> */}
          <div className="text-sm xs:leading-8 sm:leading-loose opacity-75 font-normal text-dm">
            {bidder && bidder.map((a) => <p> {a.address}</p>)}
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Card;
