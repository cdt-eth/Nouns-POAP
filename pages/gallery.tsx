import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { auctionsState } from "../atoms";
import { useRecoilState } from "recoil";
import auctionData from "./api/auctions.json";
import { v4 as uuidv4 } from "uuid";
import Header from "./components/Header";

const Gallery = () => {
  const [mostRecentCompletedAuctionId, setMostRecentCompletedAuctionId] =
    useState(0);
  const [poapData, setPoapData] = useState([]);
  // const [biddersGettingPOAP, setBiddersGettingPOAP] = useState(
  //   new Array<any>()
  // );
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getMostRecentAuctionId = async () => {
      const settings = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // GraphQL query to get id of settled auction with highest endTime
          query: `{
              auctions(orderBy: endTime, orderDirection:desc, where: {settled:true}, first: 1) {
                id
              }
            }`,
        }),
      };
      try {
        setIsLoading(true);
        const fetchResponse = await fetch(
          "https://api.thegraph.com/subgraphs/name/nounsdao/nouns-subgraph",
          settings
        );
        const data = await fetchResponse.json();
        // console.log("DATA HERE", data.data.auctions);
        setMostRecentCompletedAuctionId(data.data.auctions[0].id);
      } catch {
        console.log("1) Error fetching most recent auction");
      }
    };

    getMostRecentAuctionId();
  }, []);

  function countDivisibles(A, B, M) {
    // Add 1 explicitly as A
    // is divisible by M
    if (A % M == 0) return B / M - A / M + 1;

    // A is not divisible by M
    return Math.round(B / M - A / M);
  }

  const numberOfNounderNounsInRange = countDivisibles(
    115,
    mostRecentCompletedAuctionId,
    10
  );

  const k = mostRecentCompletedAuctionId - 114 - numberOfNounderNounsInRange;

  // console.log("mostRecentCompletedAuctionId", mostRecentCompletedAuctionId);
  // console.log("numberOfNounderNounsInRange", numberOfNounderNounsInRange);
  // console.log("k", k);

  useEffect(() => {
    const getBiddersForPOAP = async () => {
      const settings = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // GraphQL query to get all bids for mostRecentlyCompletedAuctionId
          // auctions(orderBy: startTime, where: {settled: true}, orderDirection:desc, first:38) {
          query: `{
            auctions(orderBy: startTime, where: {settled: true}, orderDirection:desc, first:${k}) {
                id,
                bidder {
                  id
                }
                bids {
                  id
                  amount
                  bidder {
                    id
                  }
                }
              }
             }`,
        }),
      };

      try {
        if (mostRecentCompletedAuctionId == 0) {
          return;
        }

        const fetchResponse = await fetch(
          "https://api.thegraph.com/subgraphs/name/nounsdao/nouns-subgraph",
          settings
        );
        const data = await fetchResponse.json();
        // console.log("GALLERY", data.data.auctions);
        data && setPoapData(data.data.auctions);

        // // Get winning bidder
        // const winningBidderAddr = data.data.auctions[0].bidder.id;

        // // Filter the winning bidder out of bid info list
        // const filteredBidInfo = data.data.auctions[0].bids.filter(
        //   (bidInfo: any, id: number) => {
        //     return bidInfo.bidder.id !== winningBidderAddr;
        //   }
        // );

        // // Construct map relating address => highestBidAmount
        // const bidMap = new Map<string, number>();
        // filteredBidInfo.forEach((bidInfo: any) => {
        //   if (bidMap.has(bidInfo.bidder.id)) {
        //     if (bidMap.get(bidInfo.bidder.id) < Number(bidInfo.amount)) {
        //       bidMap.set(bidInfo.bidder.id, Number(bidInfo.amount));
        //     }
        //   } else {
        //     bidMap.set(bidInfo.bidder.id, Number(bidInfo.amount));
        //   }
        // });

        // // Sort by bid amount and take top 5
        // const addressesGettingPOAP = Array.from(
        //   bidMap,
        //   ([address, amount]) => ({
        //     address,
        //     amount,
        //   })
        // )
        //   .sort((firstBidder, secondBidder) => {
        //     return secondBidder.amount - firstBidder.amount;
        //   })
        //   .slice(0, 5);

        // setBiddersGettingPOAP(addressesGettingPOAP);
        // console.log("addressesGettingPOAP", addressesGettingPOAP);
        setIsLoading(false);
      } catch {
        console.log("Error fetching POAP wining bidders");
      }
    };

    getBiddersForPOAP();
  }, [mostRecentCompletedAuctionId]);

  const [auctions, setAuctions] = useRecoilState(auctionsState);

  auctionData && setAuctions(auctionData);
  poapData && console.log("poapData", poapData[0]);

  return (
    <div className=" min-h-screen bg-nouns-bg-darkblue">
      <Header title="Gallery | Nouns POAP" />
      <div className=" w-11/12  m-auto text-nouns-yellow xs:pb-10 sm:pb-2 maxW">
        <Nav gallery />
        <div className="flex xs:flex-col sm:gap-4 sm:flex-row xs:mb-4 sm:mb-10 xs:text-center">
          <div className="text-nouns header">Gallery</div>
          <p className="xs:pt-4 sm:pt-0 sm:self-end sm:pb-16 text-dm">
            Previous POAP Winners
          </p>
        </div>

        <div className="flex flex-wrap xs:flex-col sm:flex-row  border-nouns-yellow border-opacity-20 font-bold text-dm sm:border-t mb-10">
          {poapData &&
            poapData.map((a) => (
              // <Card key={uuidv4()} number={a.id} bidder={a.bids} />
              <Card key={uuidv4()} auction={a} />
            ))}
          {/* <Card key={uuidv4()} auction={poapData[0]} /> */}
          {/* {auctions &&
            auctions.map((a) => (
              <Card key={uuidv4()} number={a.auction} bidder={a.bids} />
            ))} */}
        </div>
        <Footer dark={true} gallery />
      </div>
    </div>
  );
};

export default Gallery;
