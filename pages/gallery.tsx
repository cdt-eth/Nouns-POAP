import React, { useEffect } from "react";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { auctionsState } from "../atoms";
import { useRecoilState } from "recoil";
import auctionData from "./api/auctions.json";

const Gallery = () => {
  const [auctions, setAuctions] = useRecoilState(auctionsState);

  auctionData && setAuctions(auctionData);

  return (
    <div className=" min-h-screen bg-nouns-bg-darkblue">
      []{" "}
      <div className="xs:w-10/12 sm:w-9/12 m-auto text-nouns-yellow xs:pb-10 sm:pb-20">
        <Nav dark={true} gallery />
        <div className="flex xs:flex-col sm:gap-4 sm:flex-row xs:mb-4 sm:mb-10 xs:text-center">
          <div className="text-nouns header">Gallery</div>
          <p className="xs:pt-4 sm:pt-0 sm:self-end sm:pb-16 text-dm">
            Previous POAP Winners
          </p>
        </div>

        <div className="flex flex-wrap flex-row border-b border-nouns-yellow border-opacity-20 font-bold text-dm">
          {auctions &&
            auctions.map((a) => <Card number={a.auction} bidder={a.bids} />)}
        </div>
      </div>
      <Footer dark={true} gallery />
    </div>
  );
};

export default Gallery;
