import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface CardProps {
  // number: number;
  // bidder: any;
  auction: any;
}

const Card = ({ auction }: CardProps) => {
  // const Card = ({ number, bidder }: CardProps) => {
  // console.log("auction", number, bidder);

  const shortAddress = (address) => {
    return address && [address.substr(0, 4), address.substr(38, 4)].join("...");
  };

  const [biddersGettingPOAP, setBiddersGettingPOAP] = useState(
    new Array<any>()
  );
  // console.log("auction", auction);

  // Get winning bidder
  const winningBidderAddr = auction && auction.bidder.id;

  // Filter the winning bidder out of bid info list
  const filteredBidInfo =
    auction &&
    auction.bids.filter((bidInfo: any, id: number) => {
      return bidInfo.bidder.id !== winningBidderAddr;
    });

  // Construct map relating address => highestBidAmount
  const bidMap = new Map<string, number>();

  filteredBidInfo &&
    filteredBidInfo.forEach((bidInfo: any) => {
      if (bidMap.has(bidInfo.bidder.id)) {
        if (bidMap.get(bidInfo.bidder.id) < Number(bidInfo.amount)) {
          bidMap.set(bidInfo.bidder.id, Number(bidInfo.amount));
        }
      } else {
        bidMap.set(bidInfo.bidder.id, Number(bidInfo.amount));
      }
    });

  // Sort by bid amount and take top 5
  const addressesGettingPOAP = Array.from(bidMap, ([address, amount]) => ({
    address,
    amount,
  }))
    .sort((firstBidder, secondBidder) => {
      return secondBidder.amount - firstBidder.amount;
    })
    .slice(0, 5);
  // console.log(auction, addressesGettingPOAP);
  // setBiddersGettingPOAP(addressesGettingPOAP);
  console.log("addressesGettingPOAP", addressesGettingPOAP);

  return addressesGettingPOAP && auction ? (
    <div className="sm:border-b xs:w-full sm:w-1/2 border-nouns-yellow sm:border-r border-opacity-20 xs:px-2 xs:pl-6 sm:px-16 py-8 card">
      <div className="sm:flex sm:flex-col lg:flex-row-reverse ">
        {/* <div className="card-group "> */}
        <div className="sm:w-full lg:w-1/2">
          <a
            href={`https://nouns.wtf/auction/${auction.id ? auction.id : ""}`}
            // href={`https://nouns.wtf/auction/${number}`}
            target="_blank"
            rel="noreferrer"
          >
            <img
              className=" m-auto h-52 z-10 card-image sm:cursor-pointer rounded-full"
              src={`./beings/n${auction.id ? auction.id : ""}.png`}
              alt={`poap${auction.id}`}
            />
          </a>
        </div>
        <div className="text-nouns sm:w-full lg:w-1/2 xs:text-5xl  xs:pt-6 sm:pt-10 lg:pt-0  sm:text-5xl xs:mb-4 sm:mb-10 card-title w-full ">
          Noun {auction.id ? auction.id : ""} POAP
          {/* </div> */}
          {/* </div> */}
          <div className="text-sm xs:leading-8 sm:leading-loose opacity-75 font-normal text-dm sm:pt-4">
            {addressesGettingPOAP &&
              auction &&
              addressesGettingPOAP.map((a) => (
                <p key={uuidv4()}>
                  {" "}
                  {shortAddress(a.address ? a.address : "")}
                </p>
              ))}
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Card;
